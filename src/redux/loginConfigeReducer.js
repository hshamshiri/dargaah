import { createSlice } from "@reduxjs/toolkit";

export const loginStateSlice = createSlice({
  name: "loginstatus",
  initialState: {
    loginState: "logout",
  },
  reducers: {
    changeLoginState: (state, action) => {
      state.loginState = action.payload;
    },
  },
});

export const { changeLoginState } = loginStateSlice.actions;
export default loginStateSlice.reducer;
