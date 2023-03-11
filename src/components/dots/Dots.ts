import { Component } from "base";
import template from "partials/dots/dots.hbs";

export class Dots extends Component {
  render() {
    return this.compile(template, this.props);
  }
}
