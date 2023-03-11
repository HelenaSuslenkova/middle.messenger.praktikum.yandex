import { Component } from "base";
import template from "partials/imageMessage/imageMessage.hbs";
import { MessageProps } from "shared";

export class ImageMessage extends Component<MessageProps> {

  render() {
    return this.compile(template, this.props);
  }
}
