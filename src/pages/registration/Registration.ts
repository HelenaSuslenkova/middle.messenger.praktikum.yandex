import { Component, Controller } from "base";
import { Button, Form, TextInput } from "components";
import { ComponentProps, FormNames } from "shared";
import template from "./registration.hbs";

const formClass = "form";
const buttonClass = "submit-btn";

export class Registration extends Component {
  constructor(props: ComponentProps) {
    super(props);
  }
  init() {
    this.state = {
      email: {
        inputId: "email",
        type: "email",
        placeholder: "Email",
        alt: "Email",
        value: "",
        error: "",
        alertMessage: "",
      },
      login: {
        inputId: "login",
        type: "text",
        placeholder: "Login",
        alt: "Login",
        value: "",
        error: "",
        alertMessage: "",
      },
      first_name: {
        inputId: "first_name",
        type: "text",
        placeholder: "Name",
        alt: "Name",
        value: "",
        error: "",
        alertMessage: "",
      },
      second_name: {
        inputId: "second_name",
        type: "text",
        placeholder: "Surname",
        alt: "Surname",
        value: "",
        error: "",
        alertMessage: "",
      },
      phone: {
        inputId: "phone",
        type: "tel",
        placeholder: "Phone",
        alt: "Phone",
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

    this.props.emailInput = new TextInput(this.state.email);
    this.props.loginInput = new TextInput(this.state.login);
    this.props.firstNameInput = new TextInput(this.state.first_name);
    this.props.secondNameInput = new TextInput(this.state.second_name);
    this.props.phoneInput = new TextInput(this.state.phone);
    this.props.passwordInput = new TextInput(this.state.password);

    this.props.submit = new Button({
      type: "submit",
      label: "Registration",
      style: buttonClass,
    })

    this.children.form = new Form({
      style: formClass,
      handleSubmit: (event: Event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const validationData = Controller.validate(formData);

        validationData!.forEach((input) => {
          if (input) {
            if (
              Object.keys(input).some((value) => value === FormNames.email)
            ) {
              this.setState({
                ...this.state,
                email: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.emailInput.setProps(this.state.email);
            }
            if (
              Object.keys(input).some((value) => value === FormNames.login)
            ) {
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
            if (
              Object.keys(input).some((value) => value === FormNames.first_name)
            ) {
              this.setState({
                ...this.state,
                first_name: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.firstNameInput.setProps(this.state.first_name);
            }
            if (
              Object.keys(input).some((value) => value === FormNames.second_name)
            ) {
              this.setState({
                ...this.state,
                second_name: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.secondNameInput.setProps(this.state.second_name);
            }
            if (
              Object.keys(input).some((value) => value === FormNames.phone)
            ) {
              this.setState({
                ...this.state,
                phone: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.phoneInput.setProps(this.state.phone);
            }
          }
        });
      },
      inputs: [
        this.props.emailInput,
        this.props.loginInput,
        this.props.firstNameInput,
        this.props.secondNameInput,
        this.props.phoneInput,
        this.props.passwordInput,
      ],
      button: this.props.submit,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
