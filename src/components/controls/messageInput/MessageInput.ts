import { Input } from "../Input";
import template from "partials/controls/messageInput.hbs";
import { BaseInput } from "components";
import { Controller } from "controllers";

const inputStyle = "message-input";
const inputType = "text";

export class MessageInput extends Input {
  init() {
    (this.state = {
      input: {
        value: this.props.value,
        type: inputType,
        inputId: this.props.inputId,
        placeholder: this.props.placeholder,
        inputStyle: inputStyle,
      },
    }),
      (this.children = {
        input: new BaseInput({
          ...this.state.input,
          handleFocus: (_event: FocusEvent) => {},
          handleBlur: (event: FocusEvent) => {
            if (event.target) {
              const { value, name } = event.target as HTMLInputElement;
              const validationData = Controller.validate({ [name]: value });

              this.setProps({
                ...this.props,
                error: validationData[0].error,
                alertMessage: validationData[0].alertMessage,
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
