import { Component } from "base";
import { Avatar, Link } from "components";
import {
  ComponentProps,
  defaultImage,
  PersonalData,
  NavigationData,
} from "shared";
import { ListItem } from "./components";
import template from "./profile.hbs";

export class Profile extends Component<ComponentProps> {
  getPersonalData(): ListItem[] {
    return PersonalData.map(
      (item) =>
        new ListItem({
          ...item,
        })
    );
  }

  getNavigation(): Link[] {
    return NavigationData.map(
      (item) =>
        new Link({
          ...item,
        })
    );
  }

  init() {
    this.children.avatar = new Avatar({
      src: defaultImage,
      alt: "Helena",
      submit: true,
      style: "full-size",
    });

    this.children.personalData = this.getPersonalData();
    this.children.navigationLinks = this.getNavigation();
  }

  render() {
    return this.compile(template, this.props);
  }
}
