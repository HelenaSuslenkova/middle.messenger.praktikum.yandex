import { Input } from "../Input";
import template from "partials/controls/attachInput.hbs";
import { InputProps } from "shared";

type AttachInputProps = {
  src: URL;
} & InputProps;

export class AttachInput extends Input {
  constructor(props: AttachInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
