import { Form } from "components";
import template from "partials/form/profileForm.hbs";
import { FormProps } from "shared";

export class ProfileForm extends Form {
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
