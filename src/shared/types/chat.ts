import { ComponentProps } from "./common";

export interface ChatProps {
  name: string;
  alt: string;
  time?: string;
  styleChatWrapper?: string;
  forMain?: string;
  styleName?: string;
  message?: string;
  sender?: string;
  count?: string;
}

export type ImageMessageProps = {
  src?: URL;
  alt?: string;
  right?: string;
};

export type TextMessageProps = {
  content?: string;
  right?: string;
  doubleCheck?: string;
};
export type MessageProps = {
  time: string;
} & ImageMessageProps & TextMessageProps & ComponentProps;
