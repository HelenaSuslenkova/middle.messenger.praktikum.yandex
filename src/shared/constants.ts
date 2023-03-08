export const nameRule = /^[A-ZА-Я][a-zа-я]*(-[A-ZА-Я][a-zа-я]*)*$/;

export const loginRule = /^(?!\d+$)[a-zA-Z0-9_-]{3,20}$/;

export const phoneRule = /^\+?\d{10,15}$/;

export const emailRule = /^[a-zA-Z0-9_-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/;

export const passwordRule = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
