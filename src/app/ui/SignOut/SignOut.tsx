"use client";

import { signOut } from "next-auth/react";

export const SignOut = () => {
  const handleSignOut = () => {
    console.log("#### signOut");
    signOut({ callbackUrl: "http://localhost:3000/" });
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};
