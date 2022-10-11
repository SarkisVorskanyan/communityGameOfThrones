import {object, ref, string} from "yup";
import {REQUIRED, EMAIL_ERROR, LENGTH_ERROR4_11, LENGTH_ERROR4_30, CONFIRM_PASSWORD} from './../../configs/Messages';

export const SignUpValidate = object().shape({
    email: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR4_30)
        .max(30, LENGTH_ERROR4_30)
        .email(EMAIL_ERROR),
    password: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR4_11)
        .max(11, LENGTH_ERROR4_11),
    confirmPassword:
        string()
        .oneOf([ref('password')], CONFIRM_PASSWORD)
        .required(REQUIRED),
    nickname: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR4_11)
        .max(11, LENGTH_ERROR4_11)
});