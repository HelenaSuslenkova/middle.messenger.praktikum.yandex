import signInPage from '../pages/signin/signin.hbs';
import registrationPage from '../pages/registration/registration.hbs';
import page404 from '../pages/page404/page404.hbs';
import page500 from '../pages/page500/page500.hbs';
import profile from '../pages/profile/profile.hbs';
import changePersonalData from '../pages/changePersonalData/changePersonalData.hbs';
import changePassword from '../pages/changePassword/changePassword.hbs';
import selectChatPage from '../pages/chat/selectChat/selectChat.hbs';
import chatPage from '../pages/chat/chat/chat.hbs';
import menuPage from '../pages/menu/menu.hbs';

import uploadFile1Modal from '../pages/modals/uploadFile_1.hbs';
import uploadFile2Modal from '../pages/modals/uploadFile_2.hbs';
import uploadFile3Modal from '../pages/modals/uploadFile_3.hbs';
import uploadFile4Modal from '../pages/modals/uploadFile_4.hbs';
import userForm1Modal from '../pages/modals/userForm_1.hbs';
import userForm2Modal from '../pages/modals/userForm_2.hbs';

import { routesType, propsType, menuType } from './types';

const defaultImage = new URL(
  '../asserts/images/default-image.png',
  import.meta.url
);

const attachIcon = new URL(
  '../asserts/icons/attach.png',
  import.meta.url
);

const defaultImageMessage = new URL(
  '../asserts/images/default-image-message.jpg',
  import.meta.url
);

const plusIcon = new URL(
  '../asserts/icons/plus.png',
  import.meta.url
);

const crossIcon = new URL(
  '../asserts/icons/cross.png',
  import.meta.url
);

const fileIcon = new URL(
  '../asserts/icons/file.png',
  import.meta.url
);

const photoIcon = new URL(
  '../asserts/icons/photo.png',
  import.meta.url
);

const locationIcon = new URL(
  '../asserts/icons/location.png',
  import.meta.url
);

const menuProfile: menuType = [
  {
    icon: plusIcon,
    title: "Add user",
  },
  {
    icon: crossIcon,
    title: "Delete user",
  },
];

const menuAttach: menuType= [
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

const ROOT_SELECTOR: string = 'app'

const ROUTES: routesType = {
  signin: signInPage,
  registration: registrationPage,
  page404: page404,
  page500: page500,
  profile: profile,
  changeData: changePersonalData,
  changePassword: changePassword,
  selectChat: selectChatPage,
  chat: chatPage,
  menu: menuPage,
  uploadFile1Modal: uploadFile1Modal,
  uploadFile2Modal: uploadFile2Modal,
  uploadFile3Modal: uploadFile3Modal,
  uploadFile4Modal: uploadFile4Modal,
  userForm1Modal: userForm1Modal,
  userForm2Modal: userForm2Modal,
}

const PROPS: propsType = {
  signin: {},
  registration: {},
  page404: {},
  page500: {},
  profile: {
    defaultImage: defaultImage,
  },
  changeData: {
    defaultImage: defaultImage,
  },
  changePassword: {
    defaultImage: defaultImage,
  },
  modals: {},
  selectChat: {},
  chat: {
    defaultImageMessage: defaultImageMessage,
    attachIcon: attachIcon,
  },
  menu: {
    menuProfile: menuProfile,
    menuAttach: menuAttach,
  },
  uploadFile1Modal: {},
  uploadFile2Modal: {},
  uploadFile3Modal: {},
  uploadFile4Modal:  {},
  userForm1Modal: {},
  userForm2Modal: {},
}

window.goToPage = function(name: string, selector: string){
  const page = ROUTES[name];
  const props = PROPS[name];
  window.render(page, props, selector);
}

window.render = function(html: any, props: propsType, selector: string = `#${ROOT_SELECTOR}`) {
  const element: HTMLElement | null= document.querySelector(selector);
  if(element) {
    element.innerHTML = html(props) as string;
  }
}
