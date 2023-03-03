
import { Component } from 'base';
import appTemplate from 'app/app/app.hbs';

export class Main extends Component {
  render() {
    return this.compile(appTemplate, {});
  }
}
