import { Component } from "base";

export class Input extends Component {

  get value() {
    return (this.element as HTMLInputElement).value;
  }

  protected render(): DocumentFragment {
    return super.render();
  }
}
