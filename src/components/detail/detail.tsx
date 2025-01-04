import Image from "next/image";
import { signOut } from "next-auth/react";
import showToast from "../showToast/showToast";

const Detail = () => {
  const handleLogout = async () => {
    try {
      showToast("User logged out Successfully 😥", "error");
      await signOut();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="detail flex-[1]">
      <div className="user py-8 px-5 flex flex-col items-center gap-4 border-b border-solid border-[#dddddd35]">
        <Image
          height={100}
          width={100}
          className="object-cover rounded-full"
          src="/avatar.png"
          alt=""
        />
        <h2 className="text-2xl font-bold">Jane Doe</h2>
        <p>Lorem, ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col gap-6 p-5 info">
        <div className="option ">
          <div className="flex items-center justify-between title">
            <span>Chat Settings</span>
            <Image
              height={30}
              width={30}
              className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
              src="/arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Privacy & Security</span>
            <Image
              height={30}
              width={30}
              className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
              src="/arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Shared Photos</span>
            <Image
              height={30}
              width={30}
              className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
              src="/arrowDown.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 mt-5 photos">
            <div className="flex items-center justify-between photoItem">
              <div className="flex items-center justify-center gap-5 photoDetail">
                <Image
                  className="self-start object-cover h-10 rounded-sm"
                  src="/bg.webp"
                  alt=""
                  width={40}
                  height={40}
                />
                <span className="text-sm text-[lightgray] font-light">
                  photo_2024_2.png
                </span>
              </div>
              <Image
                height={30}
                width={30}
                className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
                src="/download.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 photos">
            <div className="flex items-center justify-between photoItem">
              <div className="flex items-center justify-center gap-5 photoDetail">
                <Image
                  className="self-start object-cover h-10 rounded-sm"
                  src="/bg.webp"
                  alt=""
                  width={40}
                  height={40}
                />
                <span className="text-sm text-[lightgray] font-light">
                  photo_2024_2.png
                </span>
              </div>
              <Image
                height={30}
                width={30}
                className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
                src="/download.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-5 photos">
            <div className="flex items-center justify-between photoItem">
              <div className="flex items-center justify-center gap-5 photoDetail">
                <Image
                  className="self-start object-cover h-10 rounded-sm"
                  src="/bg.webp"
                  alt=""
                  width={40}
                  height={40}
                />
                <span className="text-sm text-[lightgray] font-light">
                  photo_2024_2.png
                </span>
              </div>
              <Image
                height={30}
                width={30}
                className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
                src="/download.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between title">
            <span>Shared Files</span>
            <Image
              height={30}
              width={30}
              className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
              src="/arrowUp.png"
              alt=""
            />
          </div>
        </div>
        <button className="p-4 bg-[rgba(230,74,105,0.553)] text-white border-none rounded-md cursor-pointer outline-none hover:bg-[rgba(230,74,105,0.796)]">
          Block User
        </button>
        <button
          className="logout p-2.5 bg-[#1a73e8]"
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
