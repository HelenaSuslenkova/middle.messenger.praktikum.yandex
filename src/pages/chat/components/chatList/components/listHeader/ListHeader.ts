import { Component } from "base";
import { Link } from "components";
import template from "./listHeader.hbs";

export class ListHeader extends Component {
  init() {
    this.children.link = new Link({
      label: "Profile >",
      style: "regular500 smaller-plus grey2",
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
