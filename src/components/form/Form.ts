import { Component } from "base";
import { Arrow, Button } from "components";
import { Input } from "components/controls/Input";
import template from "partials/form/form.hbs";
import { ComponentProps } from "shared";

type FormProps = {
  style?: string;
  inputs: Input[];
  button: Arrow | Button;
  handleSubmit: (event: Event) => void;
} & ComponentProps;

export class Form extends Component {
  constructor(props: FormProps) {
    super(props);
  }

  init() {
    this.props.events = {
      submit: this.props.handleSubmit,
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
