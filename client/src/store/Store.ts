import {combineReducers, configureStore} from "@reduxjs/toolkit";
import Auth_reducer from "./features/authReducer/Auth_reducer";
import Settings_reducer from "./features/settingsReducer/Settings_reducer";


const rootReducer = combineReducers({
    settings: Settings_reducer,
    auth: Auth_reducer,
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