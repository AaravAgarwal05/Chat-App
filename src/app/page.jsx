"use client";
import React, { useState, useEffect } from "react";
import List from "../components/list/list";
import Chat from "../components/chat/chat";
import Detail from "../components/detail/detail";
import Login from "../components/login/login";
import Notification from "../components/notification/notification";
import { getSession } from "../server/serverActions";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSession();
        if (session.user) {
          setCurrentUser(session.user);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSession();
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
