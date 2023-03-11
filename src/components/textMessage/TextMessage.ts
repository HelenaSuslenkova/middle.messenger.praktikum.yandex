import { Component } from "base";
import { MessageProps } from "shared";
import template from "partials/textMessage/textMessage.hbs";
export class TextMessage extends Component<MessageProps> {

  render() {
    return this.compile(template, this.props);
  }
}
