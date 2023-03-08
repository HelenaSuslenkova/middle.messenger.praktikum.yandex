import { Component } from "base";
import { ComponentProps } from "shared";
import template from "partials/arrow/arrow.hbs";

type ArrowProps = {
  typeButton: string;
  style?: string;
} & ComponentProps;

export class Arrow extends Component<ArrowProps> {
  render() {
    return this.compile(template, this.props);
  }
}
