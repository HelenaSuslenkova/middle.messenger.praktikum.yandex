import { Input } from "../Input";
import template from "partials/controls/searchInput.hbs";
export class SearchInput extends Input {
  render() {
    return this.compile(template, this.props);
  }
}
