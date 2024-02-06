"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoogleSignInButton } from "../google-sign-in-button";
import { SignOut } from "../sign-out-button";
import { UserProfile } from "./user-profile/user-profile";
import styles from "./navbar.module.scss";
import { useAppSelector } from "@/lib/hooks";

export const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/history", label: "History" },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navigationItems}>
          {user
            ? links.map(({ href, label }) => {
                const isActive = href === pathname;
                return (
                  <li key={href} className={isActive ? styles.active : ""}>
                    <Link href={href}>{label}</Link>
                  </li>
                );
              })
            : null}
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
