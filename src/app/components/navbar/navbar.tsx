"use client";
import { useAppSelector } from "@/lib/hooks";
import { GoogleSignInButton } from "../google-sign-in-button";
import { SignOut } from "../sign-out-button";
import Link from "next/link";
import { UserProfile } from "./user-profile/user-profile";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/history">History</Link>
        </li>
      </ul>
      {user && <UserProfile user={user} />}
      <div>{user ? <SignOut /> : <GoogleSignInButton />}</div>
    </div>
  );
};
