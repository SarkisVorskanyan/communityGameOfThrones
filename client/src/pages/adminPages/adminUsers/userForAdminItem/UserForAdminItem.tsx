import React, {FC} from 'react'
import {UserType} from "../../../../types/usersTypes/UserType";
import {GiImperialCrown} from 'react-icons/gi'
import { RiAdminLine } from 'react-icons/ri';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { ImBlocked } from 'react-icons/im';
import './UserForAdminItem.scss'
import UsualBtn from "../../../../components/common/buttons/usualBtn/UsualBtn";
import {checkSuccess} from "../../../../helpers/customHelpers/CustomHelpers";

interface UserForAdminItemProps {
    currentItems: any
}

const UserForAdminItem: FC <UserForAdminItemProps> = ({currentItems}) => {

    const blockUser = (id: string) => {
        console.log('blockUser')
    }

    const removeUser = (id: string) => {
        console.log(id, ' remove id')
    }

    return (
        currentItems &&
        currentItems.map((item: UserType, index: number) => (
            <div className={'user_admin_container'} key={index}>
                <div className={'avatar_block'}>
                    <div className={'avatar'}>
                        {/*<img />*/}
                    </div>
                    <h3>{item?.nickname}</h3>
                </div>
                <div className={'buttonsBlock'}>
                    <UsualBtn onClick={() => removeUser(item?._id)} label={'Удалить'} />
                </div>
                <div className={'itemsBlock'}>
                    <div className={'item'}>
                        <GiImperialCrown size='3rem' fill={checkSuccess('owner', item?.role) ? '#ECEC00' : '#422931'} />
                    </div>
                    <div className={'item'}>
                        <RiAdminLine size='3rem' fill={checkSuccess('admin', item?.role) ? '#ECEC00' : '#422931'} />
                    </div>
                    <div className={'item'}>
                        <IoShieldCheckmarkOutline size='3rem' stroke={item?.isActivated ? '#34F417' : '#422931'} />
                    </div>
                    <div className={'item'}>
                        <ImBlocked size='3rem' />
                    </div>
                    {/*strokeWidth="1" stroke={'white'} size='2rem'*/}
                </div>


            </div>
        ))
    )
}

export default UserForAdminItem