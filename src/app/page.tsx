"use client";
import React, { useState, useEffect } from "react";
import List from "../components/list/list";
import Chat from "../components/chat/chat";
import Detail from "../components/detail/detail";
import Login from "../components/login/login";
import Notification from "../components/notification/notification";

export default function Home() {
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    setCurrentUser({ email: "test" });
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
          {currentUser ? (
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
