import React, { FC, useState } from 'react'
import CustomInput from '../../../components/common/inputs/customInput/CustomInput'
import FormTitle from '../../../components/common/titles/FormTitle'
import './SignUpPage.scss'
import {ErrorMessage, Formik} from 'formik';
import { ReqSignUpType } from '../../../types/authType/ReqSIgnUpType'
import { SignUpValidate } from './../../../utils/validation/SignUpValidate';
import SubmitBtn from '../../../components/common/buttons/submitBtn/SubmitBtn';
import Spinner from '../../../components/common/loading/spinner/Spinner';
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {registration} from "../../../store/features/authReducer/Auth_api";

const SignUpPage: FC = () => {
    const {load} = useAppSelector(state => state.auth)
    const initialValues: ReqSignUpType = { email: '', password: '', nickname: '', confirmPassword: "" };
    const dispatch = useAppDispatch()

    const SignUp = (values: ReqSignUpType) => {
        dispatch(registration(values))
    }


    return (
      <div className='signUp_container'>
          {load ? <Spinner /> : null}
        <div className='signUp_subContainer'>
        <FormTitle title='Регистрация' />
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpValidate}
            onSubmit={ (values, action) => {
                SignUp(values)
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
                        <div className={'formBlock'}>
                            <div className={'formSubBlock'}>
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
                            </div>
                            <div className={'formSubBlock'}>
                                <CustomInput handleChange={handleChange}
                                             error={errors.confirmPassword}
                                             value={values.confirmPassword}
                                             touched={touched.confirmPassword}
                                             type={'password'}
                                             name={'confirmPassword'}
                                             label={'Пофторите парол'} >
                                    <ErrorMessage name={'confirmPassword'}>
                                        {(errorMsg => <p className={'errorText'}>{errorMsg}</p>)}
                                    </ErrorMessage>
                                </CustomInput>

                                <CustomInput error={errors.nickname}
                                             handleChange={handleChange}
                                             value={values.nickname}
                                             touched={touched.nickname}
                                             name={'nickname'}
                                             label={'Имя'}>
                                    <ErrorMessage name={'nickname'}>
                                        {(errorMsg => <p className={'errorText'}>{errorMsg}</p>)}
                                    </ErrorMessage>
                                </CustomInput>
                            </div>
                        </div>
                          <SubmitBtn handleSubmit={handleSubmit} label='Регистрация' />
                    </form>
            )}
          </Formik>
        </div>
      </div>
    
    )
}

export default SignUpPage