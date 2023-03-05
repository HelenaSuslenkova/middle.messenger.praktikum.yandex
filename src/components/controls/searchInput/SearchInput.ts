import { Input } from "../Input";
import template from "partials/controls/searchInput.hbs";
import { InputProps } from "shared";
export class SearchInput extends Input {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
