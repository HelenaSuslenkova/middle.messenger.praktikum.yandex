import { Component } from "base";
import template from "./listItem.hbs";
import { Text } from "components";

const itemKeyClass = "regular500 small";
const itemValueClass = "regular500 small grey2";

type ListItemProps = {
  itemKey: {
    content: string;
  };
  itemValue: {
    content: string;
  };
};

export class ListItem extends Component {
  constructor(props: ListItemProps) {
    super(props);
  }

  init() {
    this.children.itemKey = new Text({
      content: this.props.itemKey.content,
      style: itemKeyClass,
    });
    this.children.itemValue = new Text({
      content: this.props.itemValue.content,
      style: itemValueClass,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
