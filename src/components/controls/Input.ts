import { Component } from "base";
import { InputProps } from "shared";
export class Input<Props extends Record<string, any> = {}> extends Component<InputProps> {
  constructor(props: InputProps & Props) {
    super(props);
  }

  get value() {
    return (this.element as HTMLInputElement).value;
  }
}
