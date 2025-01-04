"use client";
import React, { useState, useEffect } from "react";
import List from "../components/list/list";
import Chat from "../components/chat/chat";
import Detail from "../components/detail/detail";
import Login from "../components/login/login";
import Notification from "../components/notification/notification";
import { useSession } from "next-auth/react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="p-12 text-4xl rounded-xl bg-[rgba(17,25,40,0.9)] loading">
        Loading...
      </div>
    );
  } else {
    return (
      <>
        <Notification />
        <div className="main w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-xl backdrop-saturate-200 rounded-xl border border-solid border-[rgba(255,255,255,0.125)] flex">
          {session ? (
            <>
              <List />
              <Chat />
              <Detail />
            </>
          ) : (
            <Login />
          )}
        </div>
      </>
    );
  }
}
