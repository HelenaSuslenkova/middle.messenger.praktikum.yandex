import { ComponentProps } from "./common";

export type InputProps = {
  inputId: string;
  value?: string;
  placeholder?: string;
  autofocus?: boolean;
  wrapperStyle?: string;
  inputStyle?: string;
  isVisibleAlert?: string;
  alertStyle?: string;
  alertMessage?: string;
} & ComponentProps;
