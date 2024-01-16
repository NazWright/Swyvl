import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
// ...
const store = configureStore({
  reducer: {
    authSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
