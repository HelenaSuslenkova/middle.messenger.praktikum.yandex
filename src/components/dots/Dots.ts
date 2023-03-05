import { Component } from "base";
import template from "partials/dots/dots.hbs";

export class Dots extends Component {

  init() {
    // this.props.events = {
    //   click: () => console.log('clicked'),
    // }
  }

  render() {
    return this.compile(template, this.props);
  }
}
