
import { createSlice } from "@reduxjs/toolkit";
import uiconfige from "../uiConfige.json"


export const uiConfigeSlice = createSlice({
    name: "uiConfige",
    initialState: { value: uiconfige },
    reducer: {
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        }
    }
})


export default uiConfigeSlice.reducer