import React, {FC} from 'react'
import {UserType} from "../../../../types/usersTypes/UserType";
import {GiImperialCrown} from 'react-icons/gi'
import { RiAdminLine } from 'react-icons/ri';
import { IoShieldCheckmarkOutline } from 'react-icons/io5';
import { ImBlocked } from 'react-icons/im';
import './UserForAdminItem.scss'

interface UserForAdminItemProps {
    currentItems: any
}

const UserForAdminItem: FC <UserForAdminItemProps> = ({currentItems}) => {
    return (
        currentItems &&
        currentItems.map((item: any, index: number) => (
            <div className={'user_admin_container'} key={index}>
                <div className={'avatar_block'}>

                </div>
                <GiImperialCrown />
                <RiAdminLine />
                <IoShieldCheckmarkOutline />
                <ImBlocked />
                <h3>Item #{item?.nickname}</h3>

            </div>
        ))
    )
}

export default UserForAdminItem