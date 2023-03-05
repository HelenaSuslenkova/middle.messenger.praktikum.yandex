import { Component } from "base";
import template from "partials/imageMessage/imageMessage.hbs";
import { MessageProps } from "shared";

export class ImageMessage extends Component {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
