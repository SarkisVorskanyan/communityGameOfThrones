import React, { FC } from 'react'
import Spinner from "../../../components/common/loading/spinner/Spinner";
import FormTitle from "../../../components/common/titles/FormTitle";
import {ErrorMessage, Formik} from "formik";
import {SignUpValidate} from "../../../utils/validation/SignUpValidate";
import CustomInput from "../../../components/common/inputs/customInput/CustomInput";
import SubmitBtn from "../../../components/common/buttons/submitBtn/SubmitBtn";
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {ReqSignUpType} from "../../../types/authType/ReqSIgnUpType";
import {ReqSignInType} from "../../../types/authType/ReqSignInType";
import {SignInValidate} from "../../../utils/validation/SignInValidate";
import { login } from '../../../store/features/authReducer/Auth_api';
import './SignInPage.scss'
import {useNavigate} from "react-router-dom";

const SignInPage: FC = () => {
    const {load} = useAppSelector(state => state.auth)
    const initialValues: ReqSignInType = { email: '', password: ''};
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    return (
        <div className='signUp_container'>
            {load ? <Spinner /> : null}
            <div className='signUp_subContainer'>
                <FormTitle title='Вход' />
                <Formik
                    initialValues={initialValues}
                    validationSchema={SignInValidate}
                    onSubmit={ (values, action) => {
                        dispatch(login(values))
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
                                         name={'email'}
                                         touched={touched.email}
                                         value={values.email}
                                         error={errors.email}
                                         label={'Email'}>
                                <ErrorMessage name={'email'}>
                                    {(errorMsg => <p className={'errorText'}>{errorMsg}</p>)}
                                </ErrorMessage>
                            </CustomInput>

                            <CustomInput handleChange={handleChange}
                                         error={errors.password}
                                         value={values.password}
                                         touched={touched.password}
                                         type={'password'}
                                         name={'password'}
                                         label={'Парол'} >
                                <ErrorMessage name={'password'}>
                                    {(errorMsg => <p className={'errorText'}>{errorMsg}</p>)}
                                </ErrorMessage>
                            </CustomInput>
                            <p className={'resetPassText'} onClick={() => navigate('/forgetPass')} >Забыли пароль?</p>
                            <SubmitBtn handleSubmit={handleSubmit} label='Вход' />
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default SignInPage