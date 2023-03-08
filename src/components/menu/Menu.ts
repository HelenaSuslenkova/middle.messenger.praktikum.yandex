import { Component } from "base";
import template from "partials/menu/menu.hbs";
import { ComponentProps, menuProfile } from "shared";

type MenuProps = {
  data: typeof menuProfile,
} & ComponentProps;

export class Menu extends Component<MenuProps> {
  init() {
    this.props.data = menuProfile;
  }

  render() {
    return this.compile(template, this.props);
  }
}
