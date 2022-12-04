import {combineReducers, configureStore} from "@reduxjs/toolkit";
import Admin_reducer from "./features/adminReducer/Admin_reducer";
import Auth_reducer from "./features/authReducer/Auth_reducer";
import Settings_reducer from "./features/settingsReducer/Settings_reducer";
import User_reducer from "./features/usersReducer/Users_reducer";


const rootReducer = combineReducers({
    settings: Settings_reducer,
    auth: Auth_reducer,
    admin: Admin_reducer,
    users: User_reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            })
    })
}

export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']