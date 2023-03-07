import { Component, Controller } from "base";
import { Button, Form, Link, TextInput } from "components";
import { ComponentProps, FormNames } from "shared";
import template from "./signin.hbs";

const formClass = "form";
const buttonClass = "submit-btn";
const linkClass = "regular500 smaller";
export class SignIn extends Component {
  constructor(props: ComponentProps) {
    super(props);
  }
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

    this.props.loginInput = new TextInput(this.state.login);
    this.props.passwordInput = new TextInput(this.state.password);

    this.props.submit = new Button({
      type: "submit",
      label: "Sign In",
      style: buttonClass,
    });

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
              this.props.loginInput.setProps(this.state.login);
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
              this.props.passwordInput.setProps(this.state.password);
            }
          }
        });
      },
      inputs: [this.props.loginInput, this.props.passwordInput],
      button: this.props.submit,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
