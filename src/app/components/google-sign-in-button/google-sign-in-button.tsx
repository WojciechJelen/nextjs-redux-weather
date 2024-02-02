"use client";

import { signIn } from "@/lib/features/auth/authThunks";
import { useAppDispatch } from "@/lib/hooks";

export const GoogleSignInButton = () => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    dispatch(signIn());
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};
