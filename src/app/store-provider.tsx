"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store";
import { setUser } from "@/lib/features/auth/authSlice";
import type { User } from "next-auth";

export default function StoreProvider({
  children,
  user = null,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    // it will be rendered once on the server, but could be rendered twice on the client,
    // so we need to make sure we only create the store once
    storeRef.current = makeStore();
    storeRef.current.dispatch(setUser(user));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
