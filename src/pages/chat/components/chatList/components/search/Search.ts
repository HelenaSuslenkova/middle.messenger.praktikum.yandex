import { Component } from "base";
import { SearchInput } from "components";
import template from "./search.hbs";

export class Search extends Component {
  init() {
    this.children.searchInput = new SearchInput({
      wrapperStyle: "smallerPlus regular500",
      placeholder: "Search",
      inputId: "search",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
