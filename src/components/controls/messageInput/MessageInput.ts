import { Input } from "../Input";
import template from "partials/controls/messageInput.hbs";
import { InputProps } from "shared";

export class MessageInput extends Input {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
