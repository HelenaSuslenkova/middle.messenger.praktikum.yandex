import { FormNames } from "shared";

export default class Validator {
  static _validationRules = {
    message: function (value: string) {
      return value !== "";
    },
    attach: function (value: string) {
      return Boolean(value);
    },
    second_name: function (value: string) {
      return value.match(/^[A-ZА-Я][a-zа-я]*(-[A-ZА-Я][a-zа-я]*)*$/);
    },
    first_name: function (value: string) {
      return value.match(/^[A-ZА-Я][a-zа-я]*(-[A-ZА-Я][a-zа-я]*)*$/);
    },
    display_name: function (value: string) {
      return value.match(/^[A-ZА-Я][a-zа-я]*(-[A-ZА-Я][a-zа-я]*)*$/);
    },
    login: function (value: string) {
      return value.match(/^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/);
    },
    phone: function (value: string) {
      return value.match(/^\+?\d{10,15}$/);
    },
    email: function (value: string) {
      return value.match(/^[a-zA-Z0-9_-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/);
    },
    password: function (value: string) {
      return value.match(/^(?=.*[A-Z])(?=.*\d).{8,40}$/);
    },
    repeat_password: function (value: string) {
      return value.match(/^(?=.*[A-Z])(?=.*\d).{8,40}$/);
    },
  };

  static _validationMessages = {
    message: "This field is required",
    phone: "Invalid Phone number",
    email: "Invalid Email",
    login: "Invalid Login",
    first_name: "Invalid First Name",
    second_name: "Invalid Second Name",
    display_name: "Invalid Display Name",
    password: "Password invalid",
    repeat_password: "Password invalid",
    attach: "Not valid file",
  };

  static validate(data: FormData | { [x: string]: string }) {
    if (data instanceof FormData) {
      const preparedData = Validator._prepare(data);
      return Validator._validateData(preparedData);
    } else {
      return Validator._validateData(
        data as Record<keyof typeof FormNames, string | File>
      );
    }
  }

  static _validateData(data: Record<keyof typeof FormNames, string | File>) {
    // TODO: must be removed
    console.info(data);

    return Object.entries(data).map(([key, value]) => {
      if (key === FormNames.message) {
        const isValid = Validator._validationRules.message(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.message,
        };
      } else if (key === FormNames.attach) {
        const isValid = Validator._validationRules.attach(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.attach,
        };
      } else if (key === FormNames.email) {
        const isValid = Validator._validationRules.email(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.email,
        };
      } else if (key === FormNames.phone) {
        const isValid = Validator._validationRules.phone(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.phone,
        };
      } else if (key === FormNames.login) {
        const isValid = Validator._validationRules.login(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.login,
        };
      } else if (key === FormNames.first_name) {
        const isValid = Validator._validationRules.first_name(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.first_name,
        };
      } else if (key === FormNames.second_name) {
        const isValid = Validator._validationRules.second_name(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.second_name,
        };
      } else if (key === FormNames.display_name) {
        const isValid = Validator._validationRules.display_name(
          value as string
        );
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.display_name,
        };
      } else if (key === FormNames.password) {
        const isValid = Validator._validationRules.password(value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages.password,
        };
      } else if (key === FormNames.repeat_password) {
        const isValid = Validator._validationRules.repeat_password(
          value as string
        );
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage:
            !isValid && Validator._validationMessages.repeat_password,
        };
      } else {
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
