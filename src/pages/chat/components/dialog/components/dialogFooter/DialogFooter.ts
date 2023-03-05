import { Component } from "base";
import { Arrow, AttachInput, Form, MessageInput } from "components";
import { attachIcon, ComponentProps } from "shared";
import template from "./dialogFooter.hbs";

type DialogFooterProps = {
  attachIcon: URL;
} & ComponentProps;

const formButtonClass = "arrow-right";
const formClass = "chat-message-send";

export class DialogFooter extends Component {
  constructor(props: DialogFooterProps) {
    super(props);
  }

  init() {
    this.children.form = new Form({
      style: formClass,
      inputs: [
        new AttachInput({
          src: attachIcon,
          inputId: "attach",
        }),
        new MessageInput({
          inputId: "message",
          placeholder: "Message",
        }),
      ],
      button: new Arrow({
        typeButton: "submit",
        style: formButtonClass,
      })
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
