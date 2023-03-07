import { FormNames } from "shared";

export default class Validator {
  static _validationRules = {
    message: function (value: string) {
      return value !== "";
    },
    attach: function (value: string) {
      return value !== "";
    },
    phone: function (value: string) {
      return value.match(
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
      );
    },
    email: function (value: string) {
      return value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    },
  };

  static _validationMessages = {
    message: "This field is required",
    phone: "The phone number isn't correct",
    email: "The email isn't correct",
    attach: "Not valid file",
  };

  static validate(
    data: FormData | { [x: string]: string}
  ) {
    if (data instanceof FormData) {
      const preparedData = Validator._prepare(data);
      return Validator._validateData(preparedData);
    } else {
      return Validator._validateData(data as Record<keyof typeof FormNames, string | File>);
    }
  }

  static _validateData(data: Record<keyof typeof FormNames, string | File>) {

    return Object.entries(data).map(([key, value]) => {
      if (key === FormNames.message) {
        const isValid = Validator._validationRules.message(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.message,
        };
      }
      else if (key === FormNames.attach) {
        const isValid = Validator._validationRules.attach(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.attach,
        };
      }
      else if (key === FormNames.email) {
        const isValid = Validator._validationRules.email(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.email,
        };
      }
      else if (key === FormNames.phone) {
        const isValid = Validator._validationRules.phone(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.phone,
        };
      }
      else {
        return {
          [key]: value,
          error: "",
          alertMessage: "",
        };
      }
    });
  }

  static _prepare(
    data: FormData
  ): Record<keyof typeof FormNames, string | File> {
    return [...data.entries()].reduce(
      (acc, [key, value]: [keyof typeof FormNames, FormDataEntryValue]) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<keyof typeof FormNames, string | File>
    );
  }
}
