import { Component } from "base";
import template from "partials/link/link.hbs";
import { ComponentProps } from "shared";

type LinkProps = {
  label: string;
  style?: string;
} & ComponentProps;

export class Link extends Component {
  constructor(props: LinkProps) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
