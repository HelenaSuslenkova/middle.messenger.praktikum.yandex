import template from "./chat.hbs";
import { defaultImageMessage, attachIcon } from "shared/resources";
import { Component } from "base";

export class Chat extends Component {
  init() {
    this.props = {
      defaultImageMessage,
      attachIcon,
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}
