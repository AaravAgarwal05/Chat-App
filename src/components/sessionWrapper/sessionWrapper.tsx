"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

const sessionWrapper = ({ children }: { children: ReactNode }) => {
  return <SessionProvider refetchInterval={5 * 60}>{children}</SessionProvider>;
};

export default sessionWrapper;
