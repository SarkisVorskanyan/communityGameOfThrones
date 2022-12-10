import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../../types/usersTypes/UserType";
import {login} from "../authReducer/Auth_api";
import {SignInType} from "../../../types/authTypes/SignInType";
import storageService from "../../../utils/storageService/StorageService";
import {toast} from "react-toastify";
import {fetchUsers} from "./Users_api";
import {UsersOfPagination} from "../../../types/usersTypes/UsersOfPagination";


interface UsersState {
    users: UserType[] | [],
    usersTotalCount: number | 0,
    load: boolean,
    error: string,
}

const initialState: UsersState = {
    users: [],
    usersTotalCount: 0,
    load: false,
    error: ''

}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {


    },
    extraReducers: {
        [fetchUsers.pending.type]: (state) => {
            state.load = true
        },
        [fetchUsers.fulfilled.type]: (state, action: PayloadAction<UsersOfPagination>) => {
            state.load = false
            state.users = action.payload.users
            state.error = ''
            state.usersTotalCount = action.payload?.totalCount
        },
        [fetchUsers.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.error = action.payload.response.data.message
        },
    }
})

export const {} = UsersSlice.actions

export default UsersSlice.reducer;