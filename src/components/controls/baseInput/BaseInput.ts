import { Component } from "base";
import template from "partials/controls/input.hbs";
import { ComponentProps, InputProps } from "shared";

export class BaseInput extends Component {
  constructor(props: InputProps & ComponentProps) {
    super(props);
  }
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
