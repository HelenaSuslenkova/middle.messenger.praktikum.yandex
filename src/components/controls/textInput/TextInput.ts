import template from "partials/controls/textInput.hbs";
import { Input } from "../Input";

export class TextInput extends Input {

  render() {
    return this.compile(template, this.props);
  }
}
