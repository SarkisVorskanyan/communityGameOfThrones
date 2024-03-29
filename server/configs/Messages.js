export const VALIDATION_ERROR = 'Ошибка валидаии'
export const DOES_NOT_VALID_EMAIL = 'Это не валидный email'
export const REQUIRED_NAME = 'Имя обязително'
export const LENGTH_PASSWORD = 'Парол должен содержить от 4 до 10 символов'
export const EMAIL_INCORRECT = 'Email не правилый'
export const PASSWORD_INCORRECT = 'Парол не правилый'
export const AUTORIZED_ERROR = 'Нет аутентификации'
export const ADMIN_ERROR = 'Ты не являешся админом'
export const INCORRECT_LINK = 'Это не правилнйй адресс'
export const SUCCESS_SIGNUP = 'Вы успешно зарегистрировани, проверте ваша электронная почта'
export const SUCCESS_SEND_RESET_PASS = 'Для изменение пароля, зайдите вашу электронную почту'
export const SUCCESS_RESET_PASS = 'Пароль был успешно изменен'
export const CREATE_NEW_ROLE_ERROR = 'Tакого Рола уже существует'

export function getMessage (type, value = ''){
    switch (type) {
        case 'error-email':
            return `Ваш ${value} email уже исползуется, попробуйте другой email`
        case 'error-nickname':
            return `${value}, это имя уже исползуется, попробуйте другое имя`
        default:
            break;
    }
}