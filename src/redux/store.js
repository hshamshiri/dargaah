import { configureStore } from "@reduxjs/toolkit";
import uiConfigeReducer from "./uiConfigeReducer";

const store = configureStore({
    reducer: {
        uiConfigeJson: uiConfigeReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})




export default store