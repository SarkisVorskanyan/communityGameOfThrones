import React, {FC, useEffect, useState} from 'react'
import FormTitle from "../../../components/common/titles/FormTitle";
import CustomInput from "../../../components/common/inputs/CustomInput";
import {ErrorMessage} from "formik";
import SubmitBtn from "../../../components/common/buttons/submitBtn/SubmitBtn";
import {EMAIL_ERROR, REQUIRED} from "../../../configs/Messages";
import TimerSendEmail from "./timerSendEmail/TimerSendEmail";
import Spinner from "../../../components/common/loading/spinner/Spinner";
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import { forgetPass } from '../../../store/features/authReducer/Auth_api';
import {useNavigate} from "react-router-dom";

const ForgetPassPage: FC = () => {
    const [value, setValue] = useState<any>('')
    const [validateError, setValidateError] = useState<string>('')
    const [showTimer, setShowTimer] = useState<boolean>(false)
    const {load, error} = useAppSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()


    const handleChange = (value: React.ChangeEvent<any>) => {
        setValue(value.target.value)
    }

    const sendMail = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!value?.length){
            setValidateError(REQUIRED)
            return
        }
        if (!regex.test(value.trim())) {
            setValidateError(EMAIL_ERROR)
            return
        }
        setValidateError('')
        dispatch(forgetPass(value))
    }

    return (
        <div className='signUp_container'>
            {load ? <Spinner /> : null}
            <div className='signUp_subContainer'>
                <FormTitle title='Забыли пароль?' />
                <form>
                    <CustomInput handleChange={(e) => handleChange(e)}
                                 value={value}
                                 label={'email'} >
                        <p className={'errorText'}>{validateError}</p>
                    </CustomInput>

                    {!showTimer ? <SubmitBtn label={'Отправит сообщение'} handleSubmit={sendMail}/> : (
                        <TimerSendEmail setShowTimer={setShowTimer} />
                    )}
                </form>
            </div>
        </div>
    )
}

export default ForgetPassPage