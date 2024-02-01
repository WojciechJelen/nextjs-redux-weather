import type { User } from "next-auth";

export type UserState = {
  user: User | null;
};
