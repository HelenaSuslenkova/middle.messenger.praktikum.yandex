import { Component } from "base";
import { Controller } from "controllers";
import { Avatar, Button, Form, ProfileForm, TextInput } from "components";
import { ComponentProps, defaultImage, FormNames } from "shared";
import template from "../profile/changeData.hbs";

const formClass = "form";
const buttonClass = "submit-btn";

export class ChangePassword extends Component<ComponentProps> {
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

    this.state.avatar = new Avatar({
      src: defaultImage,
      alt: "Helena",
      submit: true,
      style: "full-size",
    });
    this.state.passwordInput = new TextInput(this.state.password);
    this.state.repeatPasswordInput = new TextInput(this.state.repeat_password);

    this.children.avatar = new Form({
      handleSubmit: (_event: Event) => {},
      inputs: [this.state.avatar],
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
              this.state.passwordInput.setProps(this.state.password);
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
              this.state.repeatPasswordInput.setProps(
                this.state.repeat_password
              );
            }
          }
        });
      },
      inputs: [this.state.passwordInput, this.state.repeatPasswordInput],
      button: new Button({
        type: "submit",
        label: "Save",
        style: buttonClass,
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
