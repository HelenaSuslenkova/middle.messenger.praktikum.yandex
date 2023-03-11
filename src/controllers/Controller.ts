import { Validator } from "helpers";
export default class Controller {
  static validate(
    data: FormData | { [x: string]: string }
  ) {
    return Validator.validate(data);
  }
}
