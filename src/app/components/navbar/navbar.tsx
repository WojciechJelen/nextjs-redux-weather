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
      <div className={styles.container}>
        <ul className={styles.navigationItems}>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/history">History</Link>
          </li>
        </ul>

        <div className={styles.logo}>Weather App</div>

        <div className={styles.userActions}>
          {user && <UserProfile user={user} />}
          <div>{user ? <SignOut /> : <GoogleSignInButton />}</div>
        </div>
      </div>
    </div>
  );
};
