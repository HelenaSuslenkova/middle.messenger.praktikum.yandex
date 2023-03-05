import { Component } from "base";
import { Chat, Dots, Menu } from "components";
import { CurrentChatData, menuProfile } from "shared";
import template from "./dialogHeader.hbs";

const CurrentChatClass = "chat-name-padding";

export class DialogHeader extends Component {
  getData(): Chat {
    return new Chat({...CurrentChatData, styleName: CurrentChatClass});
  };

  init() {
    this.children.currentChat = this.getData();
    this.children.dots = new Dots();
    this.children.menu = new Menu({
      data: menuProfile,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
