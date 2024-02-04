import styles from "./page.module.scss";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  } else {
    redirect("/dashboard");
  }
}
