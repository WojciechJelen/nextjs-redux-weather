"use client";

import { signOut } from "@/lib/features/auth/authThunks";
import { useAppDispatch } from "@/lib/hooks";
import styles from "./sign-out.module.scss";

export const SignOut = () => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <button className={styles.button} onClick={handleSignOut}>
      <span className={styles.label}>Sign Out</span>
    </button>
  );
};
