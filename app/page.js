import Image from "next/image";
import List from "@/components/list/List";
import Chat from "@/components/chat/Chat";
import Detail from "@/components/detail/Detail";
import Login from "@/components/login/Login";

export default function Home() {
  const user = false;

  return (
    <>
      <div className="main w-[90vw] h-[90vh] bg-[rgba(17,25,40,0.75)] backdrop-blur-xl backdrop-saturate-200 rounded-xl border border-solid border-[rgba(255,255,255,0.125)] flex">
        {user ? (
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
