
import { createSlice } from "@reduxjs/toolkit";
import uiConfige from "../uiConfige.json"


export const uiConfigeSlice = createSlice({
    name: "userInterfaceConfige",
    initialState: {
        value: uiConfige,
        topSlider: uiConfige?.topSlider,
        journals: uiConfige?.journals,
        dashedBorders: uiConfige?.dashedBorderContainers,
        drawerButtons: uiConfige?.drawerButtons
    },
    reducers: {
        addTopSliderImage: (state, action) => {
            state.topSlider.images.push(action.payload)
        },
        addJournalsImage: (state, action) => {
            state.journals.push(action.payload)
        },
        addDashedBorders: (state, action) => {
            state.dashedBorders.push(action.payload)
        },
        addDrawerButtons: (state, action) => {
            state.drawerButtons.push(action.payload)
        }
    }
})

export const { addTopSliderImage, addJournalsImage, addDashedBorders, addDrawerButtons } = uiConfigeSlice.actions;
export default uiConfigeSlice.reducer