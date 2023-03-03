import "../../styles.pcss";
import "./partials.ts";

import { Main as MainPage } from "pages/main/Main";
import { render } from "utils";

window.addEventListener("DOMContentLoaded", () => {
  render(new MainPage());
});
