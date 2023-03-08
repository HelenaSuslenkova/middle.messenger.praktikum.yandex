import { Component } from "base";
import { Dialog } from "./components";
import { ChatList } from "./components";
import template from "./chat.hbs";
import { ComponentProps } from "shared";
export class Chat extends Component<ComponentProps> {
  init() {
    this.children.chatList = new ChatList();
    this.children.dialog = new Dialog();
  }

  render() {
    return this.compile(template, this.props);
  }
}
