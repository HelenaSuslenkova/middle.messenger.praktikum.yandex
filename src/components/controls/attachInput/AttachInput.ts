import template from "partials/controls/attachInput.hbs";
import { InputProps } from "shared";
import { Input } from "../Input";

type AttachInputProps = {
  src: URL;
} & InputProps;

export class AttachInput extends Input<AttachInputProps> {
  render() {
    return this.compile(template, this.props);
  }
}
