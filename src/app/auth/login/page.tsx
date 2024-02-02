import { GoogleSignInButton } from "@/app/components/google-sign-in-button";
import StoreProvider from "@/app/store-provider";

const LoginPage = () => {
  return (
    <StoreProvider user={null}>
      Login Page
      <GoogleSignInButton />
    </StoreProvider>
  );
};

export default LoginPage;
