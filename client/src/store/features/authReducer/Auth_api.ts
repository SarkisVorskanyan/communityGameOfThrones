import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../../api/Api"
import {ReqSignUpType} from "../../../types/authType/ReqSIgnUpType";
import {SignInType} from "../../../types/authType/SignInType";
import {SignUpType} from "../../../types/authType/SignUpType";
import {ReqSignInType} from "../../../types/authType/ReqSignInType";


export const registration = createAsyncThunk(
    'auth/registration',
    async (data: ReqSignUpType, thunkAPI) => {
        try{
            const response = await instance.post<SignUpType>('auth/registration', data)
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
            const response = await instance.post<SignInType>('auth/login', data)
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)
