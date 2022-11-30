import React, {FC, useState} from 'react'
import './AdminRoles.scss'
import CustomInput from "../../../components/common/inputs/customInput/CustomInput";
import UsualBtn from "../../../components/common/buttons/usualBtn/UsualBtn";
import {REQUIRED} from "../../../configs/Messages";
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import Spinner from "../../../components/common/loading/spinner/Spinner";
import {createRole} from "../../../store/features/adminReducer/Admin_api";
import DefaultInput from "../../../components/common/inputs/defaultInput/DefaultInput";

const AdminRoles: FC = () => {

    const [value, setValue] = useState<string | undefined>('')
    const [validateError, setValidateError] = useState<any>('')
    const {load} = useAppSelector(state => state.admin)
    const dispatch = useAppDispatch()

    const handleChange = (value: React.ChangeEvent<any>) => {
        setValue(value.target.value)
    }

    const addRole = (e: React.MouseEvent) => {
        e.preventDefault()
        if(!value?.length){
            setValidateError(REQUIRED)
            return
        }
        setValidateError('')
        dispatch(createRole({role: value}))
    }

    return (
        <div className={'container'}>
            {load ? <Spinner /> : null}
            <h3 className={'mainTitle'}>Создать новые ролы</h3>
            <form>
                <div className={'input_container'}>
                    <div style={{marginBottom: 30}}>
                        <DefaultInput handleChange={(e) => handleChange(e)}
                                      value={value}
                                      label={'Имя роля'}>
                            <p className={'errorText'} style={{fontSize: 18}}>{validateError}</p>
                        </DefaultInput>
                    </div>

                    {/*<CustomInput handleChange={(e) => handleChange(e)}*/}
                    {/*             value={value}*/}
                    {/*             label={'email'} >*/}
                    {/*    <p className={'errorText'}>{validateError}</p>*/}
                    {/*</CustomInput>*/}
                </div>
                <UsualBtn onClick={(e: React.MouseEvent) => addRole(e)} label={'Создать'} />
            </form>

        </div>

        
    )
}

export default AdminRoles