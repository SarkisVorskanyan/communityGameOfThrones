import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { SideBarDataType } from "../../../types/data/SideBarDataTypes/SideBarDataType";



interface SettingsState {
    toggleSideBar: boolean,
    subMenuId: number | null
}

const initialState: SettingsState = {
    toggleSideBar: false,
    subMenuId: null
    
}

export const SettingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTogleSideBar: (state, action: PayloadAction<boolean>) => {
            state.toggleSideBar = action.payload
        },
        setSubMenuId: (state, action: PayloadAction<number | null>) => {
            state.subMenuId = action.payload
        },
     
    },
})

export const {setTogleSideBar, setSubMenuId} = SettingsSlice.actions

export default SettingsSlice.reducer;