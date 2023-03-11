import { Component } from "base";
import { Controller } from "controllers";
import { Button, Form, Link, TextInput } from "components";
import { ComponentProps, FormNames } from "shared";
import template from "./signin.hbs";

const formClass = "form";
const buttonClass = "submit-btn";
const linkClass = "regular500 smaller";
export class SignIn extends Component<ComponentProps> {
  init() {
    this.state = {
      login: {
        inputId: "login",
        type: "text",
        placeholder: "Login",
        alt: "Login",
        value: "",
        error: "",
        alertMessage: "",
      },
      password: {
        inputId: "password",
        type: "password",
        placeholder: "Password",
        alt: "Password",
        value: "",
        error: "",
        alertMessage: "",
      },
    };

    this.state.loginInput = new TextInput(this.state.login);
    this.state.passwordInput = new TextInput(this.state.password);

    this.children.link = new Link({
      label: "Don't have an account?",
      style: linkClass,
    });
    this.children.form = new Form({
      style: formClass,
      handleSubmit: (event: Event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const validationData = Controller.validate(formData);

        validationData!.forEach((input) => {
          if (input) {
            if (Object.keys(input).some((value) => value === FormNames.login)) {
              this.setState({
                ...this.state,
                login: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.state.loginInput.setProps(this.state.login);
            }
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
          }
        });
      },
      inputs: [this.state.loginInput, this.state.passwordInput],
      button: new Button({
        type: "submit",
        label: "Sign In",
        style: buttonClass,
      }),
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
