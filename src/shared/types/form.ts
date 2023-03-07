import { ComponentProps } from "./common";

export type InputProps = {
  inputId: string;
  type: string;
  value?: string | null;
  placeholder?: string;
  autofocus?: string;
  wrapperStyle?: string;
  inputStyle?: string;
  error?: string;
  alertStyle?: string;
  alertMessage?: string;
  required?: string,
  handleFocus?: (event: Event) => void;
  handleBlur?: (event: Event) => void;
} & ComponentProps;

export enum FormNames {
  attach = 'attach',
  message = 'message',
  first_name = 'first_name',
  second_name = 'second_name',
  login = 'login',
  email = 'email',
  password = 'password',
  phone = 'phone',
}
