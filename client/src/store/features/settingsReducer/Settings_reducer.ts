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
        setTogleSideBar: (state, action: PayloadAction<boolean>) => {
            state.toggleSideBar = action.payload
        },
     
    },
})

export const {setTogleSideBar} = SettingsSlice.actions

export default SettingsSlice.reducer;