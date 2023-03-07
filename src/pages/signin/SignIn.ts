import { Component } from "base";
import template from "./signin.hbs";

export class SignIn extends Component {
  init() {}

  render() {
    return this.compile(template, this.props);
  }
}
