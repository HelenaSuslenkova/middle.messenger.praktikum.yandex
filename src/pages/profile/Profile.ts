import { Component } from "base";
import { ComponentProps } from "shared";
import template from "./profile.hbs";

export class Profile extends Component {
  constructor(props: ComponentProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
