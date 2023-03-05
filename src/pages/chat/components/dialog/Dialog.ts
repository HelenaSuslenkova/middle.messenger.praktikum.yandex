import { Component } from "base";
import { attachIcon } from "shared";
import { DialogHeader, MainContent, DialogFooter } from "./components";
import template from "./dialog.hbs";
export class Dialog extends Component {
  init() {
    this.children.dialogHeader = new DialogHeader();
    this.children.mainContent = new MainContent();
    this.children.dialogFooter = new DialogFooter({
      attachIcon,
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
