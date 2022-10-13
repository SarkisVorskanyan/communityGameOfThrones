import {object, ref, string} from "yup";
import {EMAIL_ERROR, LENGTH_ERROR4_11, LENGTH_ERROR4_30, REQUIRED} from "../../configs/Messages";

export const SignInValidate = object().shape({
    email: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR4_30)
        .max(30, LENGTH_ERROR4_30)
        .email(EMAIL_ERROR),
    password: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR4_11)
        .max(11, LENGTH_ERROR4_11),
});