import { createSlice } from "@reduxjs/toolkit";

export const captchaUrlSlice = createSlice({
  name: "captcha_Url",
  initialState: {
    captchaUrl: null,
  },
  reducers: {
    setCaptchaUrl: (state, action) => {
      state.captchaUrl = action.payload;
    },
  },
});

export const { setCaptchaUrl } = captchaUrlSlice.actions;
export default captchaUrlSlice.reducer;
