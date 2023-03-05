import { Component } from "base";
import { ListHeader, Search } from "./components";
import template from "./chatList.hbs";
import { ChatsData } from "shared";
import { Chat } from "components";

export class ChatList extends Component {
  getData(): Chat[] {
    return ChatsData.map((chat) => new Chat({
      ...chat,
    }))
  }

  init() {
    this.children.listHeader = new ListHeader();
    this.children.search = new Search();
    this.children.chatItems = this.getData();
  }

  render() {
    return this.compile(template, this.props);
  }
}
