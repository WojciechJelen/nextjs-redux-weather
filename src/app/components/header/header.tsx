import StoreProvider from "@/app/store-provider";
import { auth } from "@/auth";
import { Navbar } from "../navbar";

export const Header = async () => {
  const session = await auth();

  return (
    <StoreProvider user={session?.user ?? null}>
      <Navbar />
    </StoreProvider>
  );
};
