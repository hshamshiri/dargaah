import { createSlice } from "@reduxjs/toolkit";

export const captchaTokenSlice = createSlice({
  name: "captcha_Token",
  initialState: {
    captchaToken: null,
  },
  reducers: {
    setCaptchaToken: (state, action) => {
      state.captchaToken = action.payload;
    },
  },
});

export const { setCaptchaToken } = captchaTokenSlice.actions;
export default captchaTokenSlice.reducer;
