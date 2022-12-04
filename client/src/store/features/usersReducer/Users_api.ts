import {createAsyncThunk} from "@reduxjs/toolkit"
import {instance} from "../../api/Api"
import {ReqSignUpType} from "../../../types/authTypes/ReqSIgnUpType";
import {ResultMessageType} from "../../../types/customTypes/ResultMessageType";
import {PaginationType} from "../../../types/customTypes/PaginationType";
import {UsersOfPagination} from "../../../types/usersTypes/UsersOfPagination";


export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (data: PaginationType, thunkAPI) => {
        try{
            const response = await instance.get<UsersOfPagination>(`users/getUsers?limit=${data?.limit}&page=${data?.page}`)
            console.log(response.data)
            return response.data
        }
        catch (e) {
            console.log(e, ' error')
            return thunkAPI.rejectWithValue(e)
        }
    }
)


