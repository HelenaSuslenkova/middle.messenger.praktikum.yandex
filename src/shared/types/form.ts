import { Arrow, Button } from "components";
import { Input } from "components/controls/Input";
import { ComponentProps } from "./common";

export type InputProps = {
  inputId: string;
  type: string;
  value?: string | null;
  placeholder?: string;
  autofocus?: string;
  wrapperStyle?: string;
  inputStyle?: string;
  error?: string | false;
  alertStyle?: string;
  alertMessage?: string | false;
  required?: string,
  alt?: string;
  handleFocus: (event: Event) => void;
  handleBlur: (event: Event) => void;
} & ComponentProps;

export enum FormNames {
  attach = 'attach',
  message = 'message',
  first_name = 'first_name',
  second_name = 'second_name',
  login = 'login',
  email = 'email',
  password = 'password',
  repeat_password='repeat_password',
  phone = 'phone',
  display_name='display_name',
};

export type FormProps = {
  style?: string;
  inputs: Input<Record<string, any>>[];
  button?: Arrow | Button;
  handleSubmit: (event: Event) => void;
} & ComponentProps;
