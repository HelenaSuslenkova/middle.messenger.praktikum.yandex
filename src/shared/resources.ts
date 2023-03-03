import { MenuType } from "shared";

export const defaultImage = new URL(
  '../asserts/images/default-image.png',
  import.meta.url
);

export const attachIcon = new URL(
  '../asserts/icons/attach.png',
  import.meta.url
);

export const defaultImageMessage = new URL(
  '../asserts/images/default-image-message.jpg',
  import.meta.url
);

export const plusIcon = new URL(
  '../asserts/icons/plus.png',
  import.meta.url
);

export const crossIcon = new URL(
  '../asserts/icons/cross.png',
  import.meta.url
);

export const fileIcon = new URL(
  '../asserts/icons/file.png',
  import.meta.url
);

export const photoIcon = new URL(
  '../asserts/icons/photo.png',
  import.meta.url
);

export const locationIcon = new URL(
  '../asserts/icons/location.png',
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

export const menuAttach: MenuType= [
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
