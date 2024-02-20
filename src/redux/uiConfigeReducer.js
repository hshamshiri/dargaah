
import { createSlice } from "@reduxjs/toolkit";
import uiConfige from "../uiConfige.json"


export const uiConfigeSlice = createSlice({
    name: "interfaceConfige",
    initialState: {
        generalUIConfige: uiConfige,
        topSlider: uiConfige?.topSlider,
        journals: uiConfige?.journals,
        dashBox: uiConfige?.dashedBorderContainers,
        drawerButtons: uiConfige?.drawerButtons
    },
    reducers: {
        addGeneralUIConfige: (state, action) => {
            state.generalUIConfige = action.payload
        },
        addDashBox: (state, action) => {
            state.dashBox = action.payload
        },
        addTopSliderImage: (state, action) => {
            state.topSlider.images = action.payload
        },
        addJournalsImage: (state, action) => {
            state.journals = action.payload
        },

        // addDrawerButtons: (state, action) => {
        //     state.drawerButtons.push(action.payload)
        // }
    }
})

export const { addTopSliderImage, addJournalsImage, addDashBox, addDrawerButtons } = uiConfigeSlice.actions;
export default uiConfigeSlice.reducer