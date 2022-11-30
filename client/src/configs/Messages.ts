//Validation messages

import {toast} from "react-toastify";

export const REQUIRED: string = 'Это поле обязательно'
export const EMAIL_ERROR: string = 'Необходимо ввести валидный E-mail'
export const LENGTH_ERROR4_11: string = 'Нужно вести от 4 до 11 символов'
export const LENGTH_ERROR4_30: string = 'Нужно вести от 4 до 30 символов'
export const CONFIRM_PASSWORD: string = 'Пароли не совпадают'

//Auth messages

export const SUCCESSSIGNUP: string = 'Вы успешно зарегистрировани, проверте ваша электронная почта'

//Log messages

export const LOGINFOEMAIL: string = 'Нужно активировать Email, чтобы были доступны все функции'

//Admin messages

export const CREATENEWROLE: string = 'Вы успешно добавили новый рол'