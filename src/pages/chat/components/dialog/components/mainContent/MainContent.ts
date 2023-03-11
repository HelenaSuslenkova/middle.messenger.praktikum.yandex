import { Component } from "base";
import { ImageMessage, TextMessage } from "components";
import { ComponentProps, Messages } from "shared";
import template from "./mainContent.hbs";

export class MainContent extends Component<ComponentProps> {
  getData(): TextMessage | ImageMessage[] {
    return Messages.map((message) =>
      message?.content
        ? new TextMessage({
            ...message,
          })
        : new ImageMessage({
            ...message,
          })
    );
  }

  init() {
    this.children.messages = this.getData();
  }

  render() {
    return this.compile(template, this.props);
  }
}
