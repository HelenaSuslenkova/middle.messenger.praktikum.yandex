import { Component } from "base";
import template from "partials/form/form.hbs";
import { FormProps } from "shared";

export class Form extends Component<FormProps> {
  init() {
    this.props.events = {
      submit: this.props.handleSubmit,
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
