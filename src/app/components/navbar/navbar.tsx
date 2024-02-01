"use client";
import { useAppSelector } from "@/lib/hooks";
import { GoogleSignInButton } from "../google-sign-in-button";
import { SignOut } from "../sign-out-button";

export const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);

  console.log("#### Navbar user", user);

  if (!user) {
    return (
      <div>
        <GoogleSignInButton />
      </div>
    );
  }

  return (
    <div>
      <SignOut />
    </div>
  );
};
