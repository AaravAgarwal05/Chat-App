import Image from "next/image";

const Detail = () => {
  return (
    <div className="detail flex-[1]">
      <div className="user py-8 px-5 flex flex-col items-center gap-5 border-b border-solid border-[#dddddd35]">
        <Image
          height={100}
          width={100}
          className="rounded-full object-cover"
          src="/avatar.png"
          alt=""
        />
        <h2 className="font-bold text-2xl">Jane Doe</h2>
        <p>Lorem, ipsum dolor sit amet.</p>
      </div>
      <div className="info p-5 flex flex-col gap-8">
        <div className="option ">
          <div className="title flex items-center justify-between">
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
          <div className="title flex items-center justify-between">
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
          <div className="title flex items-center justify-between">
            <span>Shared Photos</span>
            <Image
              height={30}
              width={30}
              className="bg-[rgba(17,25,40,0.3)] p-2.5 rounded-full cursor-pointer"
              src="/arrowDown.png"
              alt=""
            />
          </div>
          <div className="photos flex flex-col gap-5 mt-5">
            <div className="photoItem flex items-center justify-between">
              <div className="photoDetail flex items-center justify-center gap-5">
                <Image
                  className="rounded-sm object-cover self-start"
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
          <div className="title flex items-center justify-between">
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
        <button className="py-2.5 px-5 bg-[rgba(230,74,105,0.553)] text-white border-none rounded-md cursor-pointer outline-none hover:bg-[rgba(230,74,105,0.796)]">Block User</button>
      </div>
    </div>
  );
};

export default Detail;
