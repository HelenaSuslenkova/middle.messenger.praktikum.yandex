import { Component } from "base";
import { Controller } from "controllers";
import { Avatar, Button, Form, ProfileForm, TextInput } from "components";
import { ComponentProps, defaultImage, FormNames } from "shared";
import template from "../profile/changeData.hbs";

const formClass = "form";
const buttonClass = "submit-btn";

export class ChangePassword extends Component {
  constructor(props: ComponentProps) {
    super(props);
  }

  init() {
    this.state = {
      password: {
        inputId: "password",
        type: "password",
        placeholder: `OldPassword`,
        value: "",
        error: "",
        alertMessage: "",
      },
      repeat_password: {
        inputId: "repeat_password",
        type: "password",
        placeholder: `NewPassword`,
        value: "",
        error: "",
        alertMessage: "",
      },
    };

    this.props.avatar = new Avatar({
      src: defaultImage,
      alt: "Helena",
      submit: true,
      style: "full-size",
    });
    this.props.passwordInput = new TextInput(this.state.password);
    this.props.repeatPasswordInput = new TextInput(this.state.repeat_password);
    this.props.submit = new Button({
      type: "submit",
      label: "Save",
      style: buttonClass,
    });

    this.children.avatar = new Form({
      handleSubmit: (_event: Event) => {},
      inputs: [this.props.avatar],
    });
    this.children.form = new ProfileForm({
      style: formClass,
      handleSubmit: (event: Event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const validationData = Controller.validate(formData);

        validationData!.forEach((input) => {
          if (input) {
            if (
              Object.keys(input).some((value) => value === FormNames.password)
            ) {
              this.setState({
                ...this.state,
                password: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.passwordInput.setProps(this.state.password);
            }
            if (
              Object.keys(input).some(
                (value) => value === FormNames.repeat_password
              )
            ) {
              this.setState({
                ...this.state,
                repeat_password: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.repeatPasswordInput.setProps(
                this.state.repeat_password
              );
            }
          }
        });
      },
      inputs: [this.props.passwordInput, this.props.repeatPasswordInput],
      button: this.props.submit,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
