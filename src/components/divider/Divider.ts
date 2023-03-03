import { Component } from "base";
import template from "partials/divider/divider.hbs";

export class Divider extends Component {
  render() {
    return this.compile(template, this.props);
  }
}
