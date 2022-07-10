import {object, ref, string} from "yup";
import { REQUIRED, LENGTH_ERROR, EMAIL_ERROR } from './../../configs/Messages';

export const SignUpValidate = object().shape({
    email: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR)
        .max(11, LENGTH_ERROR)
        .email(EMAIL_ERROR),
    password: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR)
        .max(11, LENGTH_ERROR),
    nickname: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR)
        .max(11, LENGTH_ERROR)
});