import { Component, Controller } from "base";
import { Arrow, AttachInput, Form, MessageInput } from "components";
import { attachIcon, ComponentProps, FormNames } from "shared";
import template from "./dialogForm.hbs";

type DialogFormProps = {
  attachIcon: URL;
} & ComponentProps;

const formButtonClass = "arrow-right";
const formClass = "chat-message-send";

export class DialogForm extends Component {
  constructor(props: DialogFormProps) {
    super(props);
  }

  init() {
    this.state = {
      message: {
        inputId: "message",
        placeholder: "Message",
        autofocus: "autofocus",
        value: "",
        error: "",
        alertMessage: "",
      },
      attach: {
        src: attachIcon,
        inputId: "attach",
        value: "",
        error: "",
        alertMessage: "",
      },
    };

    this.props.messageInput = new MessageInput(this.state.message);
    this.props.attachInput = new AttachInput(this.state.attach);
    this.props.submit = new Arrow({
      typeButton: "submit",
      style: formButtonClass,
    });

    this.children.form = new Form({
      style: formClass,
      handleSubmit: (event: Event) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const validationData = Controller.validate(formData);

        validationData!.forEach((input) => {
          if (input) {
            if (
              Object.keys(input).some((value) => value === FormNames.message)
            ) {
              this.setState({
                ...this.state,
                message: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.messageInput.setProps(this.state.message);
            }
            if (
              Object.keys(input).some((value) => value === FormNames.attach)
            ) {
              this.setState({
                ...this.state,
                attach: {
                  value: "",
                  error: input.error,
                  alertMessage: input.alertMessage,
                },
              });
              this.props.attachInput.setProps(this.state.attach);
            }
          }
        });
      },
      inputs: [this.props.attachInput, this.props.messageInput],
      button: this.props.submit,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
