import {
  Chat,
  SignIn,
  Registration,
  Profile,
  ChangePassword,
  ChangePersonalData,
} from "pages";
import { RoutesType } from "shared";

export const ROUTES: RoutesType = {
  chat: Chat,
  signin: SignIn,
  registration: Registration,
  profile: Profile,
  changePassword: ChangePassword,
  changeData: ChangePersonalData,
};
