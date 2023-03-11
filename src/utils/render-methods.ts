import { ROUTES } from "app/routing";
import { ROOT_SELECTOR } from "shared";
import { Component } from "base";

export function render(
  component: Component,
  selector: string = `#${ROOT_SELECTOR}`
) {
  const element: HTMLElement | null = document.querySelector(selector);

  if (element) {
    element.innerHTML = "";
    element.append(component.getContent()!);
    component.dispatchComponentDidMount();
  }
}

window.goToPage = function (name: string, selector: string) {
  const Page = ROUTES[name];
  render(new Page(), selector);
};
