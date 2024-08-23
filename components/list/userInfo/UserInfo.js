import Image from "next/image";

const UserInfo = () => {
  return (
    <>
      <div className="userInfo p-5 flex items-center justify-between">
        <div className="user flex items-center gap-5">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src={"/avatar.png"}
            alt=""
          />
          <div className="user-info">
            <h2 className="font-bold text-2xl">John Doe</h2>
          </div>
        </div>
        <div className="icons flex gap-5">
          <Image height={20} width={20} src={"/more.png"} alt="" />
          <Image height={20} width={20} src={"/video.png"} alt="" />
          <Image height={20} width={20} src={"/edit.png"} alt="" />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
