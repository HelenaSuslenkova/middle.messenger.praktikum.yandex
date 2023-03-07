import Handlebars from "handlebars/dist/handlebars.runtime";

import linkPartial from "../partials/link/link.hbs";
import textInputPartial from "../partials/controls/textInput.hbs";
import buttonPartial from "../partials/button/button.hbs";
import textPartial from "../partials/text/text.hbs";
import arrowPartial from "../partials/arrow/arrow.hbs";
import avatarPartial from "../partials/avatar/avatar.hbs";
import modalPartial from "../partials/modal/modal.hbs";
import chatPartial from "../partials/chat/chat.hbs";
import searchInputPartial from "../partials/controls/searchInput.hbs";
import dividerPartial from "../partials/divider/divider.hbs";
import textMessagePartial from "../partials/textMessage/textMessage.hbs";
import imageMessagePartial from "../partials/imageMessage/imageMessage.hbs";
import messageInputPartial from "../partials/controls/messageInput.hbs";
import attachInputPartial from "../partials/controls/attachInput.hbs";
import dotsPartial from "../partials/dots/dots.hbs";
import checkMarkPartial from "../partials/checkMark/checkMark.hbs";
import menuPartial from "../partials/menu/menu.hbs";
import formPartial from "../partials/form/form.hbs";
import alertPartial from "../partials/alert/alert.hbs";
import inputPartial from "../partials/controls/input.hbs";

Handlebars.registerPartial("link", linkPartial);
Handlebars.registerPartial("textInput", textInputPartial);
Handlebars.registerPartial("button", buttonPartial);
Handlebars.registerPartial("text", textPartial);
Handlebars.registerPartial("arrow", arrowPartial);
Handlebars.registerPartial("avatar", avatarPartial);
Handlebars.registerPartial("modal", modalPartial);
Handlebars.registerPartial("chat", chatPartial);
Handlebars.registerPartial("searchInput", searchInputPartial);
Handlebars.registerPartial("divider", dividerPartial);
Handlebars.registerPartial("textMessage", textMessagePartial);
Handlebars.registerPartial("imageMessage", imageMessagePartial);
Handlebars.registerPartial("messageInput", messageInputPartial);
Handlebars.registerPartial("attachInput", attachInputPartial);
Handlebars.registerPartial("dots", dotsPartial);
Handlebars.registerPartial("checkMark", checkMarkPartial);
Handlebars.registerPartial("menu", menuPartial);
Handlebars.registerPartial("form", formPartial);
Handlebars.registerPartial("alert", alertPartial);
Handlebars.registerPartial("input", inputPartial);
