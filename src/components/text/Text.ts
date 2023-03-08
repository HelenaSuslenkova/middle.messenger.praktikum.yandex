import { Component } from "base";
import template from "partials/text/text.hbs";

type TextProps = {
  content: string,
  style?: string,
}

export class Text extends Component {
  constructor(props: TextProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
