import { GoogleSignInButton } from "@/app/components/google-sign-in-button";
import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <StoreProvider user={null}>
      Login Page
      <GoogleSignInButton />
    </StoreProvider>
  );
};

export default LoginPage;
