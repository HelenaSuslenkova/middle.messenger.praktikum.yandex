import { Component } from "base";
import template from "partials/button/button.hbs";
import { ComponentProps } from "shared";

type ButtonProps = {
  type: string;
  label: string;
  style?: string;
} & ComponentProps;

export class Button extends Component {
  constructor(props: ButtonProps) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
