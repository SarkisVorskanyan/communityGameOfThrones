import React, {FC, useEffect} from 'react'
import {useAppDispatch} from "../../../store/StoreHooks";
import {fetchUsers} from "../../../store/features/usersReducer/Users_api";

const AdminUsers: FC = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers({limit: 5, page: 1}))
    }, [])

    return (
        <div>

        </div>
    )
}

export default AdminUsers