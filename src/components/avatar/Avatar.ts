import { Component } from "base";
import { ComponentProps } from "shared";
import template from "partials/avatar/avatar.hbs";

type AvatarProps = {
  alt: string;
  style?: string;
  src: URL;
  submit?: boolean;
} & ComponentProps;

export class Avatar extends Component<AvatarProps> {
  render() {
    return this.compile(template, this.props);
  }
}
