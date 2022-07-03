export const VALIDATION_ERROR = 'Ошибка валидаии'
export const DOES_NOT_VALID_EMAIL = 'Это не валидный email'
export const REQUIRED_NAME = 'Имя обязително'
export const LENGTH_PASSWORD = 'Парол должен содержить от 4 до 10 символов'
export const EMAIL_INCORRECT = 'Email не правилый'
export const PASSWORD_INCORRECT = 'Парол не правилый'
export const AUTORIZED_ERROR = 'Нет аутентификации'
export const ADMIN_ERROR = 'Ты не являешся админом'
export const INCORRECT_LINK = 'Это не правилнйй адресс'

export function getMessage (value, type){
    switch (type) {
        case 'email':
            return `Ваш ${value} email уже исползуется, попробуйте другой email`
        case 'nickname':
            return `${value}, это имя уже исползуется, попробуйте другое имя`
        default:
            break;
    }
}

