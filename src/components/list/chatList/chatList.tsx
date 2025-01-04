"use client";
import { useState } from "react";
import AddUser from "./addUser/addUser";
import Image from "next/image";

const ChatList = () => {
  const [addChat, setAddChat] = useState(false);
  return (
    <>
      <div className="chatList flex-[1] overflow-auto">
        <div className="flex items-center gap-5 p-5 search">
          <div className="searchBar flex-[1] bg-[rgba(17,25,40,0.5)] flex items-center gap-5 rounded-lg p-2.5">
            <Image height={20} width={20} src={"/search.png"} alt="" />
            <input
              className="flex-1 text-white bg-transparent border-none outline-none"
              type="text"
              placeholder="Search"
              name=""
              id=""
            />
          </div>
          <Image
            className="bg-[rgba(17,25,40,0.5)] p-2.5 cursor-pointer rounded-lg"
            height={36}
            width={36}
            src={addChat ? "/minus.png" : "/plus.png"}
            onClick={() => setAddChat((addChat) => !addChat)}
            alt=""
          />
        </div>
        <div className="item flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-[#dddddd35]">
          <Image height={50} width={50} className="object-cover rounded-full" src="/avatar.png" alt="" />
          <div className="texts flex flex-col gap-2.5">
            <span className="font-medium">Jane Doe</span>
            <p className="text-sm font-light">Hey! How are you?</p>
          </div>
        </div>
        <div className="item flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-[#dddddd35]">
          <Image height={50} width={50} className="object-cover rounded-full" src="/avatar.png" alt="" />
          <div className="texts flex flex-col gap-2.5">
            <span className="font-medium">Jane Doe</span>
            <p className="text-sm font-light">Hey! How are you?</p>
          </div>
        </div>
        <div className="item flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-[#dddddd35]">
          <Image height={50} width={50} className="object-cover rounded-full" src="/avatar.png" alt="" />
          <div className="texts flex flex-col gap-2.5">
            <span className="font-medium">Jane Doe</span>
            <p className="text-sm font-light">Hey! How are you?</p>
          </div>
        </div>
        <div className="item flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-[#dddddd35]">
          <Image height={50} width={50} className="object-cover rounded-full" src="/avatar.png" alt="" />
          <div className="texts flex flex-col gap-2.5">
            <span className="font-medium">Jane Doe</span>
            <p className="text-sm font-light">Hey! How are you?</p>
          </div>
        </div>
        <div className="item flex items-center gap-5 p-5 cursor-pointer border-b border-solid border-[#dddddd35]">
          <Image height={50} width={50} className="object-cover rounded-full" src="/avatar.png" alt="" />
          <div className="texts flex flex-col gap-2.5">
            <span className="font-medium">Jane Doe</span>
            <p className="text-sm font-light">Hey! How are you?</p>
          </div>
        </div>
        {addChat && <AddUser/>}
      </div>
    </>
  );
};

export default ChatList;
