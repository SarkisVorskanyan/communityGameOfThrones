import React, {FC} from 'react'
import {UserType} from "../../../../types/usersTypes/UserType";

interface UserForAdminItemProps {
    currentItems: any
}

const UserForAdminItem: FC <UserForAdminItemProps> = ({currentItems}) => {
    return (
        currentItems &&
        currentItems.map((item: any, index: number) => (
            <div key={index}>
                <h3>Item #{item?.nickname}</h3>
            </div>
        ))
    )
}

export default UserForAdminItem