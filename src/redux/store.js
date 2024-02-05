import { configureStore } from "@reduxjs/toolkit";
import uiConfigeReducer from "./uiConfigeReducer";

const store = configureStore({
    reducer: { userInterfaceConfige: uiConfigeReducer }
})




export default store