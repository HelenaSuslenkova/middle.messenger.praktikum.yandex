import template from "partials/controls/searchInput.hbs";
import { ComponentProps } from "shared";
import { Input } from "../Input";

type SearchInputProps = {
  inputId: string;
  placeholder: string;
  wrapperStyle?: string;
  inputStyle?: string;
  value?:  string;
  autofocus?: boolean;
} & ComponentProps;

export class SearchInput extends Input {
  constructor(props: SearchInputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
