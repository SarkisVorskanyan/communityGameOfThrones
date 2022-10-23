import React, {FC} from 'react'
import './ResetPassPage.scss'
import Spinner from "../../../components/common/loading/spinner/Spinner";
import FormTitle from "../../../components/common/titles/FormTitle";
import {ErrorMessage, Formik} from "formik";
import {SignInValidate} from "../../../utils/validation/SignInValidate";
import {login} from "../../../store/features/authReducer/Auth_api";
import CustomInput from "../../../components/common/inputs/CustomInput";
import {NavLink} from "react-router-dom";
import SubmitBtn from "../../../components/common/buttons/submitBtn/SubmitBtn";
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {ReqSignInType} from "../../../types/authType/ReqSignInType";

const ResetPassPage: FC = ({}) => {
    const {load} = useAppSelector(state => state.auth)
    const initialValues: ReqSignInType = { email: '', password: ''};
    const dispatch = useAppDispatch()

    return (
        <div className='signUp_container'>
            {load ? <Spinner /> : null}
            <div className='signUp_subContainer'>
                <FormTitle title='Reset password' />
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignInValidate}
                    onSubmit={ (values, action) => {
                        console.log(values, ' values')
                        //dispatch(login(values))
                        action.resetForm()
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleSubmit,
                          handleBlur,
                          setFieldValue
                      }) => (
                        <form onSubmit={handleSubmit}>

                        <SubmitBtn handleSubmit={handleSubmit} label='Send email' />

                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassPage
