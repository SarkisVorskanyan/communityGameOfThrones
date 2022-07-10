import React, { FC, useState } from 'react'
import CustomInput from '../../../components/common/inputs/CustomInput'
import FormTitle from '../../../components/common/titles/FormTitle'
import './SignUpPage.scss'
import {Formik} from 'formik';
import { ReqSignUpType } from '../../../types/authType/ReqSIgnUpType'
import { SignUpValidate } from './../../../utils/validation/SignUpValidate';
import SubmitBtn from '../../../components/common/buttons/submitBtn/SubmitBtn';

const SignUpPage: FC = () => {
    const initialValues: ReqSignUpType = { email: '', password: '', nickname: '' };
   
    return (
      <div className='signUp_container'>
        <div className='signUp_subContainer'>
        <FormTitle title='Регистрация' />
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpValidate}
            onSubmit={ (values, action) => {
                console.log(values)
                action.resetForm()
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              setFieldValue
            }) => (
                    <form onSubmit={handleSubmit}>
                      <CustomInput
                          handleChange={handleChange}
                          name={'email'}
                          value={values.email}
                          error={errors.email}
                          label={'Email'} />
                      <CustomInput 
                          handleChange={handleChange}
                          error={errors.password}
                          value={values.password}
                          name={'password'}
                          label={'Парол'} />
                      <CustomInput 
                          error={errors.nickname}
                          handleChange={handleChange}
                          value={values.nickname}
                          name={'nickname'}
                          label={'Имя'} />
                          <SubmitBtn />
                      {/* <button type='submit' onClick={(e) => handleSubmit()}>send</button> */}
                    </form>
            )}
          </Formik>
        </div>
      </div>
    
    )
}

export default SignUpPage