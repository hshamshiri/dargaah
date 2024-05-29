import { configureStore } from "@reduxjs/toolkit";
import uiConfigeSlice from "./uiConfigeReducer";
import loginStateSlice from "./loginConfigeReducer";
import accessTokenSlice from "./tokenReducer";

const store = configureStore({
  reducer: {
    uiConfigeJson: uiConfigeSlice,
    loginState: loginStateSlice,
    accessToken: accessTokenSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
