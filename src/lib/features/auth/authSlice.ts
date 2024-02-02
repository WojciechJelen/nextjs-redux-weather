// src/store/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserState } from "./types";
import { User } from "next-auth";
import {} from "./authThunks";

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  // extraReducers: (builder) => {
  //    builder.addCase(signIn.fulfilled, (state, action) => {
  //      state.user = action.payload;
  //    });
  //    builder.addCase(signOut.fulfilled, (state) => {
  //      state.user = null;
  //    });
  // },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
