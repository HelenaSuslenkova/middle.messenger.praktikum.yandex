import { Component } from "base";
import { ComponentProps } from "shared";
import template from "./dialogFooter.hbs";

type DialogFooterProps = {
  attachIcon: URL;
} & ComponentProps;

export class DialogFooter extends Component {
  constructor(props: DialogFooterProps) {
    super(props);
  }
  init() {}

  render() {
    return this.compile(template, this.props);
  }
}
