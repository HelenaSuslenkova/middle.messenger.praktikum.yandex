
import appTemplate from './app.hbs';
import '../../styles.pcss';
import './partials.ts';
import './routes.ts';

window.addEventListener('DOMContentLoaded', () => {
  window.render(appTemplate)
});
