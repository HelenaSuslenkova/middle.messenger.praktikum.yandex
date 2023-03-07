import { Component } from "base";
import template from "partials/avatar/avatar.hbs";
import { ComponentProps } from "shared";

type AvatarProps = {
  alt: string;
  style?: string;
  src: URL;
  submit?: boolean;
} & ComponentProps;

export class Avatar extends Component {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
