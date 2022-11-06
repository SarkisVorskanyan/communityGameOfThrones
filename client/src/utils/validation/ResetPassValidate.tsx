import {object, ref, string} from "yup";
import {CONFIRM_PASSWORD, LENGTH_ERROR4_11, REQUIRED} from "../../configs/Messages";

export const ResetPassValidate = object().shape({
    password: string()
        .required(REQUIRED)
        .min(4, LENGTH_ERROR4_11)
        .max(11, LENGTH_ERROR4_11),
    confirmPassword:
        string()
            .oneOf([ref('password')], CONFIRM_PASSWORD)
            .required(REQUIRED),

});