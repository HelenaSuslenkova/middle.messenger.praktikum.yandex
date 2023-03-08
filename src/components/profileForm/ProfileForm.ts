import { Form } from "components";
import template from "partials/form/profileForm.hbs";

export class ProfileForm extends Form {
  init() {
    this.props.events = {
      submit: this.props.handleSubmit,
    };
  }

  render() {
    return this.compile(template, this.props);
  }
}
