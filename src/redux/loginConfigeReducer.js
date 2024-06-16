import { createSlice } from "@reduxjs/toolkit";

export const loginStateSlice = createSlice({
  name: "loginstatus",
  initialState: {
    loginState: "logout",
  },
  reducers: {
    setLoginState: (state, action) => {
      state.loginState = action.payload;
    },
  },
});

export const { setLoginState } = loginStateSlice.actions;
export default loginStateSlice.reducer;
