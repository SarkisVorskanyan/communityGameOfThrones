import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { UserType } from './../../types/authType/UserType';



interface AuthState {
    auth: boolean,
    load: boolean,
    error: string,
    userInfo: UserType | {},

}

const initialState: AuthState = {
    auth: false,
    load: false,
    error: '',
    userInfo: {}, 
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        
     
    },
    extraReducers: {
        // [registration.pending.type]: (state) => {
        //     state.load = true
        // },
        // [registration.fulfilled.type]: (state, action: PayloadAction<any>) => {
        //     state.load = false
        //     state.message = action.payload.message
        //     state.error = ''
        //     state.success = true
        // },
        // [registration.rejected.type]: (state, action: PayloadAction<any>) => {
        //     state.load = false
        //     state.error = action.payload.response.data.message
        //     state.message = action.payload.response.data.message
        //     state.success = false
        // },
    }
})

export const {} = AuthSlice.actions

export default AuthSlice.reducer;