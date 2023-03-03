import { Component } from "base";
import template from "partials/arrow/arrow.hbs";

export class Arrow extends Component {
  render() {
    return this.compile(template, this.props);
  }
}
