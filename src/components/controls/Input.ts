import { Component } from "base";
import { InputProps } from "shared";
export class Input extends Component {
  constructor(props: InputProps) {
    super(props);
  }

  get value() {
    return (this.element as HTMLInputElement).value;
  }

  protected render(): DocumentFragment {
    return super.render();
  }
}
