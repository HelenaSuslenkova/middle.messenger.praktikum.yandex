import { Input } from "../Input";
import template from "partials/controls/messageInput.hbs";
import { InputProps } from "shared";
import { BaseInput } from "components";
import { Controller } from "base";

export class MessageInput extends Input {
  constructor(props: InputProps) {
    super(props);
  }

  init() {
    (this.state = {
      input: {
        value: "",
        type: "text",
        inputId: "message",
        placeholder: "Message",
        inputStyle: "message-input",
      },
    }),
      (this.children = {
        input: new BaseInput({
          value: "",
          type: "text",
          inputId: "message",
          placeholder: "Message",
          inputStyle: "message-input",
          handleFocus: (_event: FocusEvent) => {},
          handleBlur: (event: FocusEvent) => {
            if (event.target) {
              const { value, name } = event.target as HTMLInputElement;
              const validationData = Controller.validate({ [name]: value });

              this.setProps({
                ...this.props,
                error: validationData[0]?.error,
                alertMessage: validationData[0]?.alertMessage,
              });
            }
          },
        }),
      });
  }

  render() {
    return this.compile(template, this.props);
  }
}
