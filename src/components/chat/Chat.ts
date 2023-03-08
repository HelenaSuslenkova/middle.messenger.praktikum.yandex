import { Component } from "base";
import { ChatProps } from "shared";
import template from "partials/chat/chat.hbs";

export class Chat extends Component<ChatProps> {
  render() {
    return this.compile(template, this.props);
  }
}
