import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserType } from '../../../types/authType/UserType';
import {login, logOut, refresh, registration} from "./Auth_api";
import {SignInType} from "../../../types/authType/SignInType";
import storageService from "../../../utils/storageService/StorageService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SUCCESSSIGNUP} from "../../../configs/Messages";
import {SignUpType} from "../../../types/authType/SignUpType";
// @ts-ignore
// toast.configure()



interface AuthState {
    isAuth: boolean,
    load: boolean,
    error: string,
    userInfo: UserType | {},
    message: string,

}

const initialState: AuthState = {
    isAuth: false,
    load: false,
    error: '',
    userInfo: {},
    message: ''
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {


    },
    extraReducers: {
        [registration.pending.type]: (state) => {
            state.load = true
        },
        [registration.fulfilled.type]: (state, action: PayloadAction<SignUpType>) => {
            state.load = false
            toast.success(action.payload?.message)
            state.error = ''
        },
        [registration.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.error = action.payload.response.data.message
            toast.error(action.payload.response.data.message)
        },

        [login.pending.type]: (state) => {
            state.load = true
        },
        [login.fulfilled.type]: (state, action: PayloadAction<SignInType>) => {
            state.load = false
            state.userInfo = action.payload.user
            storageService.setToken(action.payload.accessToken)
            state.isAuth = true
            state.error = ''
        },
        [login.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.error = action.payload.response.data.message
            toast.error(action.payload.response.data.message)
        },

        [refresh.pending.type]: (state) => {
            state.load = true
        },
        [refresh.fulfilled.type]: (state, action: PayloadAction<SignInType>) => {
            state.load = false
            state.userInfo = action.payload.user
            storageService.setToken(action.payload.accessToken)
            state.isAuth = true
            state.error = ''
        },
        [refresh.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
        },

        [logOut.pending.type]: (state) => {
            state.load = true
        },
        [logOut.fulfilled.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.userInfo = {}
            localStorage.removeItem('token')
            state.isAuth = false
            state.error = ''
        },
        [logOut.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
        },
    }
})

export const {} = AuthSlice.actions

export default AuthSlice.reducer;