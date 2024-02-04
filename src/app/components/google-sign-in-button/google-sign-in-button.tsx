"use client";

import { signIn } from "@/lib/features/auth/authThunks";
import { useAppDispatch } from "@/lib/hooks";
import styles from "./google-sign-in-button.module.scss";

export const GoogleSignInButton = () => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    dispatch(signIn());
  };

  return (
    <button onClick={handleSignIn} className={styles.button}>
      <span className={styles.label}>Sign in with Google</span>
    </button>
  );
};
