import EventBus from "../event-bus/EventBus";
import { nanoid } from "nanoid";

export default abstract class Component<Props extends Record<string, any> = {}> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  } as const;

  private _eventBus: () => EventBus;
  private _element: HTMLElement | null = null;
  _meta: { props: Record<string, any> };
  protected props: Props;
  public id = nanoid(6);
  public children: Record<string, Component<any> | Component<any>[]>;
  protected state: any = {};

  constructor(propsWithChildren: any = {}) {
    const eventBus = new EventBus();

    const { props, children } = this.getChildrenAndProps(propsWithChildren);

    this.getStateFromProps(props);
    this._meta = { props };

    this.children = children;
    this.props = this.makePropsProxy(props);
    this.state = this.makePropsProxy(this.state);

    this._eventBus = () => eventBus;

    this.registerEvents(eventBus);

    eventBus.emit(Component.EVENTS.INIT);
  }

  protected getStateFromProps(_props: Record<string, any>): void {
    this.state = {};
  }

  private getChildrenAndProps(childrenAndProps: any) {
    const props: Record<string, any> = {};
    const children: Record<string, Component<Props> | Component<Props>[]> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (
        Array.isArray(value) &&
        value.every((el) => el instanceof Component)
      ) {
        children[key] = value;
      } else if (value instanceof Component) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  private addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  private removeEvents() {
    const events: Record<string, ((event: Event) => void)> = (this.props as Props).events;

    if (!events || !this._element) {
      return;
    }

    Object.entries(events).forEach(([event, listener]) => {
      if (this._element) {
        this._element.removeEventListener(event, listener);
      }
    });
  }

  private registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _init() {
    this.init();

    this._eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  protected init() {}

  private _componentDidMount() {
    this.componentDidMount();
  }

  protected componentDidMount() {}

  public dispatchComponentDidMount() {
    this._eventBus().emit(Component.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.map((el) => el.dispatchComponentDidMount());
      } else {
        child.dispatchComponentDidMount();
      }
    });
  }

  private _componentDidUpdate(oldProps?: Props, newProps?: Props) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this._eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }
  }

  protected componentDidUpdate(_oldProps?: Props, _newProps?: Props) {
    return true;
  }

  private _render() {
    this.removeEvents();
    const fragment = this.render();
    const element = fragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(element);
    }

    this._element = element;

    this.addEvents();
  }

  private makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };

        target[prop] = value;

        self._eventBus().emit(Component.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
      deleteProperty() {
        throw new Error("Access denied");
      },
    });
  }

  protected render(): DocumentFragment {
    return new DocumentFragment();
  }

  protected compile(template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context };

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = component.map(
          (el) => `<div data-id="${el.id}"></div>`
        );
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`;
      }
    });

    const html = template(contextAndStubs);

    const temp = document.createElement("template");

    temp.innerHTML = html;

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.map((el) => {
          const stub = temp.content.querySelector(`[data-id="${el.id}"]`);

          if (!stub) {
            return;
          }

          el.getContent()?.append(...Array.from(stub.childNodes));

          stub.replaceWith(el.getContent()!);
        });
      } else {
        const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      }
    });

    return temp.content;
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  setState = (nextState: any) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  };

  get element() {
    return this._element;
  }

  getContent() {
    return this.element;
  }

  show() {
    this.getContent()!.style.display = "block";
  }

  hide() {
    this.getContent()!.style.display = "none";
  }
}
