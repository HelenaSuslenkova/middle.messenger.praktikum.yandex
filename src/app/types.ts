export type menuType = {
  icon: URL;
  title: string;
}[];

export type routesType = {
  [key: string]: typeof module
};

export type propsType = {
  [key: string]: {
    defaultImage?: URL,
    defaultImageMessage?: URL,
    attachIcon?: URL,
    menuProfile?: menuType,
    menuAttach?: menuType,
  }
};
