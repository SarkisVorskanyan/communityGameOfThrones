import React, {FC, useEffect, useState} from 'react'
import {useAppDispatch, useAppSelector} from "../../../store/StoreHooks";
import {fetchUsers} from "../../../store/features/usersReducer/Users_api";
import Pagination from "../../../components/common/pagination/Pagination";
import UserForAdminItem from "./userForAdminItem/UserForAdminItem";
import Spinner from "../../../components/common/loading/spinner/Spinner";
import './AdminUsers.scss'

const AdminUsers: FC = () => {

    const dispatch = useAppDispatch()
    const {users, usersTotalCount, load} = useAppSelector(state => state.users)
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        dispatch(fetchUsers({limit: 5, page: 1}))
    }, [])


    const changePage = (selectedPage: number) => {
        setCurrentPage(selectedPage)
        dispatch(fetchUsers({limit: 5, page: selectedPage}))
    }


    return load ? <Spinner /> : (
        <div>
            <div className={'items_container'}>
                <UserForAdminItem currentItems={users} />
            </div>
            <Pagination totalCount={usersTotalCount}
                        currentPage={currentPage}
                        onChangedPage={changePage} />
        </div>
        )

}

export default AdminUsers