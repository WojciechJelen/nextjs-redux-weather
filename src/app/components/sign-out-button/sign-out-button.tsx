"use client";

import styles from "./sign-out.module.scss";
import { signOut } from "@/lib/features/auth/authThunks";
import { useAppDispatch } from "@/lib/hooks";

export const SignOut = () => {
  const dispatch = useAppDispatch();
  const handleSignOut = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(signOut());
  };

  return (
    <button className={styles.button} onClick={handleSignOut}>
      <span className={styles.label}>Sign Out</span>
    </button>
  );
};
