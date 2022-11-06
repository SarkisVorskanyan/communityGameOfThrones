import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserType } from '../../../types/authType/UserType';
import {forgetPass, login, logOut, refresh, registration, resetPass} from "./Auth_api";
import {SignInType} from "../../../types/authType/SignInType";
import storageService from "../../../utils/storageService/StorageService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {SUCCESSSIGNUP} from "../../../configs/Messages";
import {SignUpType} from "../../../types/authType/SignUpType";
import {ForgetTypePass} from "../../../types/authType/ForgetTypePass";
// @ts-ignore
// toast.configure()



interface AuthState {
    isAuth: boolean,
    load: boolean,
    error: string,
    userInfo: UserType | {},
    message: string,
    success: boolean

}

const initialState: AuthState = {
    isAuth: false,
    load: false,
    error: '',
    userInfo: {},
    message: '',
    success: false
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

        [forgetPass.pending.type]: (state) => {
            state.load = true
        },
        [forgetPass.fulfilled.type]: (state, action: PayloadAction<ForgetTypePass>) => {
            state.load = false
            storageService.setForgetToken(action.payload.token)
            toast.success(action.payload?.message)
            state.error = ''
        },
        [forgetPass.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.error = action.payload.response.data.message
            toast.error(action.payload.response.data.message)
        },

        [resetPass.pending.type]: (state) => {
            state.load = true
        },
        [resetPass.fulfilled.type]: (state, action: PayloadAction<{message: string}>) => {
            state.load = false
            toast.success(action.payload?.message)
            state.error = ''
            state.success = true
        },
        [resetPass.rejected.type]: (state, action: PayloadAction<any>) => {
            state.load = false
            state.error = action.payload.response.data.message
            toast.error(action.payload.response.data.message)
            state.success = false
        },

    }
})

export const {} = AuthSlice.actions

export default AuthSlice.reducer;