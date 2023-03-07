import { Component } from "base";
import template from "partials/alert/alert.hbs";
import { ComponentProps } from "shared";

type AlertProps = {
  simple?: string;
  alertStyle?: string;
  error?: string;
  alertMessage?: string;
} & ComponentProps;

export class Alert extends Component {
  constructor(props: AlertProps) {
    super(props);
  }
  render() {
    return this.compile(template, this.props);
  }
}
