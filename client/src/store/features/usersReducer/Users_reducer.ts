import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserType} from "../../../types/usersTypes/UserType";


interface UsersState {
    users: UserType[] | null,
    usersTotalCount: number | null
}

const initialState: UsersState = {
    users: null,
    usersTotalCount: null

}

export const UsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {


    },
})

export const {} = UsersSlice.actions

export default UsersSlice.reducer;