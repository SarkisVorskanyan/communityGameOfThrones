import React, {FC, useEffect, useState} from 'react'
import FormTitle from "../../../components/common/titles/FormTitle";
import CustomInput from "../../../components/common/inputs/CustomInput";
import SubmitBtn from "../../../components/common/buttons/submitBtn/SubmitBtn";
import {CONFIRM_PASSWORD, EMAIL_ERROR, REQUIRED} from "../../../configs/Messages";
import {SignUpValidate} from "../../../utils/validation/SignUpValidate";
import {ErrorMessage, Formik} from "formik";
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {ReqSignUpType} from "../../../types/authType/ReqSIgnUpType";
import { ResetPassValidate } from '../../../utils/validation/ResetPassValidate';
import {refresh, resetPass} from "../../../store/features/authReducer/Auth_api";
import {useNavigate} from "react-router-dom";

const ResetPassPage: FC = () => {
    const {load, success} = useAppSelector(state => state.auth)
    const initialValues = {password: '', confirmPassword: "" };
    const [token, setToken] = useState<string | null>('')
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useEffect(() => {
        setToken(localStorage.getItem('forgetToken'))
    }, [])

    useEffect(() => {
        if(success){
            navigate('/signIn')
            localStorage.removeItem('forgetToken')
        }
    }, [success])


    const changePassword = async (values: {password: string}) => {
        await dispatch(resetPass({
            password: values.password,
            token: token
        }))
    }

    return (
        <div className='signUp_container'>
            <div className='signUp_subContainer'>
                <FormTitle title='Введите новый пароль' />
                <Formik
                    initialValues={initialValues}
                    validationSchema={ResetPassValidate}
                    onSubmit={ (values, action) => {
                        changePassword(values)
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
                                    <CustomInput handleChange={handleChange}
                                                 name={'password'}
                                                 touched={touched.password}
                                                 value={values.password}
                                                 error={errors.password}
                                                 type={'password'}
                                                 label={'Парол'}>
                                        <ErrorMessage name={'password'}>
                                            {(errorMsg => <p className={'errorText'}>{errorMsg}</p>)}
                                        </ErrorMessage>
                                    </CustomInput>

                                    <CustomInput handleChange={handleChange}
                                                 error={errors.confirmPassword}
                                                 value={values.confirmPassword}
                                                 touched={touched.confirmPassword}
                                                 type={'password'}
                                                 name={'confirmPassword'}
                                                 label={'Повторите пароль'} >
                                        <ErrorMessage name={'confirmPassword'}>
                                            {(errorMsg => <p className={'errorText'}>{errorMsg}</p>)}
                                        </ErrorMessage>
                                    </CustomInput>
                            <SubmitBtn handleSubmit={handleSubmit} label='Изменит пароль' />
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ResetPassPage