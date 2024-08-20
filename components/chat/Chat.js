"use client";
import { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";

const Chat = () => {
  const [showEmoji, setShowEmoji] = useState(false);
  const [message, setMessage] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setMessage((prev) => prev + e.emoji);
    setShowEmoji(false);
  };

  return (
    <div className="flex flex-col flex-[2] border-l border-r border-solid border-[#dddddd35] h-full">
      <div className="top p-5 flex items-center justify-between border-b border-solid border-[#dddddd35]">
        <div className="user flex items-center gap-5">
          <Image
            height={60}
            width={60}
            className="rounded-full object-cover"
            src="/avatar.png"
            alt=""
          />
          <div className="texts flex flex-col gap-1.5">
            <span className="text-lg font-bold">Jane Doe</span>
            <p className="text-sm font-light text-[#a5a5a5]">
              Lorem, ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="icons flex gap-5 items-center justify-center">
          <Image height={20} width={20} src="/phone.png" alt="" />
          <Image height={20} width={20} src="/video.png" alt="" />
          <Image height={20} width={20} src="/info.png" alt="" />
        </div>
      </div>
      <div className="center flex-[1] p-5 overflow-auto flex flex-col gap-5">
        <div className="message max-w-[70%] flex gap-5">
          <Image
            height={30}
            width={30}
            className="rounded-full object-cover self-start"
            src="/avatar.png"
            alt=""
          />
          <div className="texts flex-[1] flex flex-col gap-1.5">
            <p className="p-5 bg-[rgba(17,25,40,0.3)] rounded-lg text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              repellat nulla laborum aperiam sunt, tempore, cupiditate mollitia
              fuga veritatis eligendi error quaerat suscipit reprehenderit
              asperiores? Hi!
            </p>
            <span className="text-sm">1 min ago</span>
          </div>
        </div>
        <div className="message max-w-[70%] flex gap-5 own self-end">
          <div className="texts flex-[1] flex flex-col gap-1.5">
            <Image
              height={300}
              width={1000}
              className="h-80 rounded-lg object-cover self-start"
              src="/bg.webp"
              alt=""
            />
            <p className="p-5 bg-[#5183fe] rounded-lg text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              repellat nulla laborum aperiam sunt, tempore, cupiditate mollitia
              fuga veritatis eligendi error quaerat suscipit reprehenderit
              asperiores? Hi!
            </p>
            <span className="text-sm">1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className="bottom mt-auto p-5 gap-5 flex items-center justify-between border-t border-solid border-[#dddddd35]">
        <div className="icons flex items-center justify-center gap-5">
          <Image
            height={20}
            width={20}
            className="cursor-pointer"
            src="/Image.png"
            alt=""
          />
          <Image
            height={20}
            width={20}
            className="cursor-pointer"
            src="/camera.png"
            alt=""
          />
          <Image
            height={20}
            width={20}
            className="cursor-pointer"
            src="/mic.png"
            alt=""
          />
        </div>
        <input
          className="flex-[1] bg-[rgba(17,25,40,0.5)] border-none outline-none text-white p-5 rounded-lg text-lg"
          type="text"
          placeholder="Type a message..."
          name=""
          id=""
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="emoji relative ">
          <Image
            height={20}
            width={20}
            className="cursor-pointer"
            onClick={() => setShowEmoji((prev) => !prev)}
            src="/emoji.png"
            alt=""
          />
          <div className="picker absolute bottom-12 left-0">
            <EmojiPicker open={showEmoji} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton bg-[#5183fe] text-white px-5 py-2.5 rounded-md cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
