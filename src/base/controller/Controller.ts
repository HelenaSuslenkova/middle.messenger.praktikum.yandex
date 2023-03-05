export default class Controller {
  static _instance: Controller;

  constructor() {
    if (!Controller._instance) {
      Controller._instance = this;
    }
    return Controller._instance;
  }

  static getInstance() {
    return this._instance;
  }

  static validateForm(data: FormData) {
    console.info([...data.entries()]);
  }
}
