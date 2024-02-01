"use client";

import { signOut } from "@/lib/features/auth/authThunks";
import { useAppDispatch } from "@/lib/hooks";

export const SignOut = () => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};
