"use client";

import styles from "./google-sign-in-button.module.scss";
import { signIn } from "@/lib/features/auth/authThunks";
import { useAppDispatch } from "@/lib/hooks";

export const GoogleSignInButton = () => {
  const dispatch = useAppDispatch();
  const handleSignIn = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    dispatch(signIn());
  };

  return (
    <button onClick={handleSignIn} className={styles.button}>
      <span className={styles.label}>Sign in with Google</span>
    </button>
  );
};
