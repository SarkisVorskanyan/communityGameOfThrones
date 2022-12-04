import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../../api/Api"
import {ReqSignUpType} from "../../../types/authTypes/ReqSIgnUpType";
import {SignInType} from "../../../types/authTypes/SignInType";
import {ResultMessageType} from "../../../types/customTypes/ResultMessageType";
import {ReqSignInType} from "../../../types/authTypes/ReqSignInType";
import { ForgetTypePass } from "../../../types/authTypes/ForgetTypePass";
import { ReqResetPassType } from "../../../types/authTypes/ReqResetPassType";


export const registration = createAsyncThunk(
    'auth/registration',
    async (data: ReqSignUpType, thunkAPI) => {
        try{
            const response = await instance.post<ResultMessageType>('auth/registration', data)
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)


export const login = createAsyncThunk(
    'auth/login',
    async (data: ReqSignInType, thunkAPI) => {

        try{
            const response = await instance.post<SignInType>('auth/login', data, {withCredentials: true})
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const refresh = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {

        try{
            const response = await instance.get('auth/refresh', {withCredentials: true})
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_, thunkAPI) => {

        try{
            const response = await instance.get('auth/logout', {withCredentials: true})
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const forgetPass = createAsyncThunk(
    'auth/forgetPass',
    async (data: {email: string}, thunkAPI) => {
        try{
            const response = await instance.post<ForgetTypePass>('auth/forgetPass', {email: data})
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const resetPass = createAsyncThunk(
    'auth/resetPass',
    async (data: ReqResetPassType, thunkAPI) => {
        try{
            const response = await instance.put<{message: string}>(`auth/resetPass/${data?.token}`, {password: data?.password})
            return response.data
        }
        catch (e) {
            console.log(e, ' resetPass')
            return thunkAPI.rejectWithValue(e)
        }
    }
)

