import { Component } from "base";
import template from "partials/avatar/avatar.hbs";

export class Avatar extends Component {
  render() {
    return this.compile(template, this.props);
  }
}
