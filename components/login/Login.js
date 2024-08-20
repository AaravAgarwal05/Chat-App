"use client";
import { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  return (
    <>
      <div className="login w-full h-full flex items-center gap-24">
        <div className="item flex-[1] flex flex-col items-center gap-5">
          <h2 className="text-2xl font-medium">Welcome back,</h2>
          <form className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col gap-1 ">
              <label className="self-start font-normal text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1 ">
              <label
                className="self-start font-normal text-lg"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>
            <button
              className="w-full p-5 border-none outline-none text-white rounded-md cursor-pointer bg-[#1f8ef1] font-medium"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="separator h-4/5 w-0.5 bg-[#dddddd35]"></div>
        <div className="item flex-[1] flex flex-col items-center gap-5">
          <h2 className="text-2xl font-medium">Create an Account</h2>
          <form className="flex flex-col items-center justify-center gap-5">
            <label
              className="h-12 self-start font-normal text-lg cursor-pointer w-full flex items-center justify-between underline"
              htmlFor="file"
            >
              <Image
                height={50}
                width={50}
                src={avatar.url || "/avatar.png"}
                alt=""
                className="rounded-xl object-cover opacity-60"
              />
              Upload an Image
            </label>
            <input
              className="hidden p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
              type="file"
              name="file"
              id="file"
              onChange={handleAvatar}
            />
            <div className="flex flex-col gap-1">
              <label
                className="self-start font-normal text-lg"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                type="text"
                placeholder="Username"
                name="username"
                id="username"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="self-start font-normal text-lg" htmlFor="email">
                Email
              </label>
              <input
                className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="self-start font-normal text-lg"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>
            <button
              className="w-full p-5 border-none outline-none text-white rounded-md cursor-pointer bg-[#1f8ef1] font-medium"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
