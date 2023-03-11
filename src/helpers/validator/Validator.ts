import {
  emailRule,
  FormNames,
  loginRule,
  nameRule,
  passwordRule,
  phoneRule,
} from "shared";

export default class Validator {
  static _validationRules = {
    message: (value: string) => {
      return value !== "";
    },
    attach: (value: string) => {
      return Boolean(value);
    },
    second_name: (value: string) => {
      return value.match(nameRule);
    },
    first_name: (value: string) => {
      return value.match(nameRule);
    },
    display_name: (value: string) => {
      return value.match(nameRule);
    },
    login: (value: string) => {
      return value.match(loginRule);
    },
    phone: (value: string) => {
      return value.match(phoneRule);
    },
    email: (value: string) => {
      return value.match(emailRule);
    },
    password: (value: string) => {
      return value.match(passwordRule);
    },
    repeat_password: (value: string) => {
      return value.match(passwordRule);
    },
  };

  static _validationMessages: Record<keyof typeof FormNames, string> = {
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
      if (key === FormNames[key as keyof typeof FormNames]) {
        const isValid = Validator._validationRules[key as keyof typeof FormNames](value as string);
        return {
          [key]: value,
          error: !isValid && "error",
          alertMessage: !isValid && Validator._validationMessages[key as keyof typeof FormNames],
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
