import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {toast} from "react-toastify";
import {createRole} from "./Admin_api";
import {CREATENEWROLE} from "../../../configs/Messages";
// @ts-ignore
// toast.configure()


interface AdminState {
    load: boolean,
    error: string,
    message: string
}

const initialState: AdminState = {
    load: false,
    error: '',
    message: ''

}

export const AdminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {},
    extraReducers: {
        [createRole.pending.type]: (state) => {
            state.load = true
        },
        [createRole.fulfilled.type]: (state) => {
            state.load = false
            toast.success(CREATENEWROLE)
            state.error = ''
        },
        [createRole.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.error = action.payload.response.data.message
            toast.error(action.payload.response.data.message)
        },

    },
})

export const {} = AdminSlice.actions

export default AdminSlice.reducer;