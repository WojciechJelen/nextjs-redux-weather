"use client";

import { DEFAULT_REDIRECT_URL } from "@/app/routes";
import { signIn } from "next-auth/react";

export const GoogleSignInButton = () => {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: DEFAULT_REDIRECT_URL });
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};
