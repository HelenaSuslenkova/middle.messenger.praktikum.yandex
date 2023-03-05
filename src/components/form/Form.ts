import { Component, Controller } from "base";
import { Arrow, Button } from "components";
import { Input } from "components/controls/Input";
import template from "partials/form/form.hbs";
import { ComponentProps } from "shared";

type FormProps = {
  style?: string;
  inputs: Input[];
  button: Arrow | Button;
} & ComponentProps;

export class Form extends Component {
  constructor(props: FormProps) {
    super(props);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    //TODO: remove

    Controller.validateForm(data);
  }

  init() {
    this.props.events = {
      submit: this.handleSubmit,
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
