import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface SettingsState {
    toggleSideBar: boolean,
}

const initialState: SettingsState = {
    toggleSideBar: false,

}

export const SettingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setToggleSideBar: (state, action: PayloadAction<boolean>) => {
            state.toggleSideBar = action.payload
        },
     
    },
})

export const {setToggleSideBar} = SettingsSlice.actions

export default SettingsSlice.reducer;