import { configureStore } from "@reduxjs/toolkit";
import uiConfigeSlice from "./uiConfigeReducer";
import loginStateSlice from "./loginConfigeReducer";

const store = configureStore({
  reducer: {
    uiConfigeJson: uiConfigeSlice,
    loginState: loginStateSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
