import { createAsyncThunk } from "@reduxjs/toolkit"
import { instance } from "../../api/Api"
import {ReqSignUpType} from "../../../types/authType/ReqSIgnUpType";
import {SignInType} from "../../../types/authType/SignInType";
import {SignUpType} from "../../../types/authType/SignUpType";


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
