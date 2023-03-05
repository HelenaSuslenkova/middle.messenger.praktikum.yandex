import { Component } from "base";
import template from "partials/textMessage/textMessage.hbs";
import { MessageProps } from "shared";

export class TextMessage extends Component {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
