import template from "partials/controls/input.hbs";
import { Input } from "../Input";

export class BaseInput extends Input {
  init() {
    (this.props.events = {
      focus: this.props.handleFocus,
      blur: this.props.handleBlur,
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
