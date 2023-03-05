import { ChatProps, MenuType, MessageProps } from "shared";

export const defaultImage = new URL(
  "../asserts/images/default-image.png",
  import.meta.url
);

export const attachIcon = new URL(
  "../asserts/icons/attach.png",
  import.meta.url
);

export const defaultImageMessage = new URL(
  "../asserts/images/default-image-message.jpg",
  import.meta.url
);

export const plusIcon = new URL("../asserts/icons/plus.png", import.meta.url);

export const crossIcon = new URL("../asserts/icons/cross.png", import.meta.url);

export const fileIcon = new URL("../asserts/icons/file.png", import.meta.url);

export const photoIcon = new URL("../asserts/icons/photo.png", import.meta.url);

export const locationIcon = new URL(
  "../asserts/icons/location.png",
  import.meta.url
);

export const menuProfile: MenuType = [
  {
    icon: plusIcon,
    title: "Add user",
  },
  {
    icon: crossIcon,
    title: "Delete user",
  },
];

export const menuAttach: MenuType = [
  {
    icon: photoIcon,
    title: "Photo or video",
  },
  {
    icon: fileIcon,
    title: "File",
  },
  {
    icon: locationIcon,
    title: "Location",
  },
];

export const CurrentChatData = {
  alt: "Default avatar",
  name: "Helena",
  forMain: "forMain",
};

export const Messages: MessageProps[] = [
  {
    content:
      "Привет! Смотри, SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
    time: "11:56",
  },
  {
    src: defaultImageMessage,
    time: "11:56",
  },
  {
    right: "right",
    content: "Круто!",
    time: "11:57",
    doubleCheck: "doubleCheck",
  },
];

export const ChatsData: ChatProps[] = [
  {
    alt: "Default avatar",
    name: "Helena",
    time: "12:30",
    message:
      "Друзья, у меня для вас особенный выпуск новостей!...Друзья, у меня для вас особенный выпуск новостей!...",
  },
  {
    alt: "Default avatar",
    name: "Artem",
    time: "12:35",
    message:
      "Друзья, у меня для вас особенный выпуск новостей!...Друзья, у меня для вас особенный выпуск новостей!...",
    count: "30",
  },
  {
    alt: "Default avatar",
    name: "Mishaps",
    time: "12:35",
    message: "bla-bla",
    count: "2",
  },
  {
    alt: "Default avatar",
    name: "Helena",
    sender: "Вы: ",
    message: "...",
    time: "12:35",
  },
  {
    alt: "Default avatar",
    name: "Mishaps",
    time: "12:35",
    message: "bla-bla",
    count: "2",
  },
  {
    alt: "Default avatar",
    name: "Hanna",
    time: "12:35",
    message: "bla-bla",
    count: "2",
  },
  {
    alt: "Default avatar",
    name: "Roma",
    time: "12:35",
    message: "bla-bla",
    count: "2",
  },
  {
    alt: "Default avatar",
    name: "Tim",
    time: "12:35",
    message: "bla-bla",
    count: "2",
  },
  {
    alt: "Default avatar",
    name: "John",
    time: "12:35",
    message: "bla-bla",
    count: "2",
  },
];
