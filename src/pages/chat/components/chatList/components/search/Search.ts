import { Component } from "base";
import { SearchInput } from "components";
import { ComponentProps } from "shared";
import template from "./search.hbs";

export class Search extends Component<ComponentProps> {
  init() {
    this.children.searchInput = new SearchInput({
      wrapperStyle: "smaller-plus regular500",
      placeholder: "Search",
      inputId: "search",
      type: "search",
      handleFocus: (_event: Event) => {},
      handleBlur: (_event: Event) => {},
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
