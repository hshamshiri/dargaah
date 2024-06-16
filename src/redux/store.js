import { configureStore } from "@reduxjs/toolkit";
import uiConfigeSlice from "./uiConfigeReducer";
import loginStateSlice from "./loginConfigeReducer";
import accessTokenSlice from "./tokenReducer";
import captchaTokenSlice from "./captchaTokenReducer";
import captchaUrlSlice from "./captchaUrlReducer";
import authSlice from "./authenticateReducer";

const store = configureStore({
  reducer: {
    uiConfigeJson: uiConfigeSlice,
    loginState: loginStateSlice,
    accessToken: accessTokenSlice,
    captchaToken: captchaTokenSlice,
    captchaUrl: captchaUrlSlice,
    authenticate: authSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
