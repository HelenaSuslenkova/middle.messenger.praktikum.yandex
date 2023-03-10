import { Component } from "base";
import { Controller } from "controllers";
import { Avatar, Button, Form, ProfileForm, TextInput } from "components";
import { ComponentProps, defaultImage, FormNames } from "shared";
import template from "../profile/changeData.hbs";

const formClass = "form";
const buttonClass = "submit-btn";

export class ChangePersonalData extends Component<ComponentProps> {
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
      display_name: {
        inputId: "display_name",
        type: "text",
        placeholder: "ChatName",
        alt: "ChatName",
        value: "",
        error: "",
        alertMessage: "",
      },
    };

    this.state.emailInput = new TextInput(this.state.email);
    this.state.loginInput = new TextInput(this.state.login);
    this.state.firstNameInput = new TextInput(this.state.first_name);
    this.state.secondNameInput = new TextInput(this.state.second_name);
    this.state.phoneInput = new TextInput(this.state.phone);
    this.state.displayNameInput = new TextInput(this.state.display_name);

    this.state.avatar = new Avatar({
      src: defaultImage,
      alt: "Helena",
      submit: true,
      style: "full-size",
    });

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
            if (Object.keys(input).some((value) => value === FormNames.email)) {
              this.setState({
                ...this.state,
                email: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.state.emailInput.setProps(this.state.email);
            }
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
              this.state.firstNameInput.setProps(this.state.first_name);
            }
            if (
              Object.keys(input).some(
                (value) => value === FormNames.second_name
              )
            ) {
              this.setState({
                ...this.state,
                second_name: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.state.secondNameInput.setProps(this.state.second_name);
            }
            if (Object.keys(input).some((value) => value === FormNames.phone)) {
              this.setState({
                ...this.state,
                phone: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.state.phoneInput.setProps(this.state.phone);
            }
            if (
              Object.keys(input).some(
                (value) => value === FormNames.display_name
              )
            ) {
              this.setState({
                ...this.state,
                display_name: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.state.displayNameInput.setProps(this.state.display_name);
            }
          }
        });
      },
      inputs: [
        this.state.emailInput,
        this.state.loginInput,
        this.state.firstNameInput,
        this.state.secondNameInput,
        this.state.phoneInput,
        this.state.displayNameInput,
      ],
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
