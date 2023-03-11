import { Component } from "base";
import { attachIcon, ComponentProps } from "shared";
import { DialogHeader, MainContent, DialogForm } from "./components";
import template from "./dialog.hbs";
export class Dialog extends Component<ComponentProps> {
  init() {
    this.children.dialogHeader = new DialogHeader();
    this.children.mainContent = new MainContent();
    this.children.dialogForm = new DialogForm({
      attachIcon,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
