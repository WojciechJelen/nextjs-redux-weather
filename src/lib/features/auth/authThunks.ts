import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "@/auth";
import { signOut as authSignOut, signIn as authSignIn } from "next-auth/react";
import { clearUser, setUser } from "./authSlice";
import {
  DEFAULT_REDIRECT_URL,
  DEFAULT_REDIRECT_URL_AFTER_LOGOUT,
} from "@/app/routes";

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await authSignOut({ callbackUrl: DEFAULT_REDIRECT_URL_AFTER_LOGOUT });
      dispatch(clearUser());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (_, { rejectWithValue }) => {
    try {
      await authSignIn("google", { callbackUrl: DEFAULT_REDIRECT_URL });
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
