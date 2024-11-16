import List from "@/src/components/list/List";
import Chat from "@/src/components/chat/Chat";
import Detail from "@/src/components/detail/Detail";
import Login from "@/src/components/login/Login";
import Notification from "@/src/components/notification/Notification";

export default function Home() {
  const user = true;

  return (
    <>
      <Notification />
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
