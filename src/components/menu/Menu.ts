import { Component } from "base";
import template from "partials/menu/menu.hbs";
import { ComponentProps, menuProfile } from "shared";

type MenuProps = {
  data: typeof menuProfile,
} & ComponentProps;

export class Menu extends Component {
  constructor(props: MenuProps) {
    props.data = menuProfile;
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
