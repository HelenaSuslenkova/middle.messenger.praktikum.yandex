import template from "partials/controls/textInput.hbs";
import { InputProps } from "shared";
import { Input } from "../Input";

type TextInputProps = {
  simple?: string;
  alt: string;
} & InputProps;
export class TextInput extends Input {
  constructor(props: TextInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
