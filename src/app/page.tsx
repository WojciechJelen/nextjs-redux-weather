import styles from "./page.module.css";
import { GoogleSignInButton } from "./ui/GoogleSignInButton";
import { SignOut } from "./ui/SignOut";

export default function Home() {
  return (
    <main className={styles.main}>
      <GoogleSignInButton />
      <SignOut />
    </main>
  );
}
