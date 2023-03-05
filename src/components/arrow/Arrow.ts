import { Component } from "base";
import template from "partials/arrow/arrow.hbs";
import { ComponentProps } from "shared";

type ArrowProps = {
  typeButton: string;
  style?: string;
} & ComponentProps;

export class Arrow extends Component {
  constructor(props: ArrowProps) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
