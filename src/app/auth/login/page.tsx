import { redirect } from "next/navigation";
import styles from "./page.module.scss";
import { GoogleSignInButton } from "@/app/components/google-sign-in-button";
import { auth } from "@/auth";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>SignIn With Google</h1>
      <GoogleSignInButton />
    </div>
  );
};

export default LoginPage;
