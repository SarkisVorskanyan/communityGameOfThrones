import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../../api/Api";


export const createRole = createAsyncThunk(
    'auth/createRole',
    async (data: {role: string}, thunkAPI) => {
        try{
            const response = await instance.post<{message: string}>('admin/createRole', data)
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)