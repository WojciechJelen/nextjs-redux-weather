import { createAsyncThunk } from "@reduxjs/toolkit";
import { signOut as authSignOut } from "next-auth/react";
import { clearUser } from "./authSlice";

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch }) => {
    await authSignOut({ callbackUrl: "http://localhost:3000/" });
    dispatch(clearUser());
  }
);
