
import { Component } from 'base';
import appTemplate from 'app/app/app.hbs';
import { ComponentProps } from 'shared';

export class Main extends Component<ComponentProps> {
  render() {
    return this.compile(appTemplate, {});
  }
}
