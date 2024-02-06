import { GoogleSignInButton } from "@/app/components/google-sign-in-button";
import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import styles from "./page.module.scss";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <StoreProvider user={null}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>SignIn With Google</h1>
        <GoogleSignInButton />
      </div>
    </StoreProvider>
  );
};

export default LoginPage;
