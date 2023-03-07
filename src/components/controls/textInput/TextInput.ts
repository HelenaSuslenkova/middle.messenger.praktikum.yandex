import { Controller } from "base";
import { BaseInput } from "components";
import template from "partials/controls/textInput.hbs";
import { InputProps } from "shared";
import { Input } from "../Input";

type TextInputProps = {
  simple?: string;
  alt: string;
} & InputProps;

const inputClass = "input text-input";
export class TextInput extends Input {
  constructor(props: TextInputProps) {
    super(props);
  }

  init() {
    (this.state = {
      input: {
        inputId: this.props.inputId,
        type: this.props.type,
        placeholder: this.props.placeholder,
        alt: this.props.alt,
        value: this.props.value,
        inputStyle: inputClass,
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
