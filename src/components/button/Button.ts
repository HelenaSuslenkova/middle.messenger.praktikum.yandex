import { Component } from "base";
import { ComponentProps } from "shared";
import template from "partials/button/button.hbs";

type ButtonProps = {
  type: string;
  label: string;
  style?: string;
} & ComponentProps;

export class Button extends Component<ButtonProps> {
  render() {
    return this.compile(template, this.props);
  }
}
