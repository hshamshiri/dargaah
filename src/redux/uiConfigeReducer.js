
import { createSlice } from "@reduxjs/toolkit";
import uiConfige from "../uiConfige.json"


export const uiConfigeSlice = createSlice({
    name: "interfaceConfige",
    initialState: {
        generalUIConfige: uiConfige,
        topSlider_list: null, //uiConfige?.topSlider,
        journal_list: null,//uiConfige?.journals,
        dashBox_list: null,//uiConfige?.dashedBorderContainers.dashBoxes,
        drawerButtons_list: uiConfige?.drawerButtons
    },
    reducers: {
        addGeneralUIConfige: (state, action) => {
            state.generalUIConfige = action.payload
        },
        addDashBox: (state, action) => {
            state.dashBox_list = action.payload
        },
        addTopSliderImage: (state, action) => {
            state.topSlider_list = action.payload
        },
        addJournalImage: (state, action) => {
            state.journal_list = action.payload
        },

        // addDrawerButtons: (state, action) => {
        //     state.drawerButtons.push(action.payload)
        // }
    }
})

export const { addTopSliderImage, addJournalImage, addDashBox, addDrawerButtons } = uiConfigeSlice.actions;
export default uiConfigeSlice.reducer