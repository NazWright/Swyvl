import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../model/User";
import { RootState } from "../store";

const initialState = {} as User;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction<User>) => {
      state = action.payload;
      // return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = authSlice.actions;

export default authSlice.reducer;
