import { Component } from "base";
import template from "partials/chat/chat.hbs";
import { ChatProps } from "shared";

export class Chat extends Component {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
