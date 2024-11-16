import Image from "next/image";

const UserInfo = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 userInfo">
        <div className="flex items-center gap-5 user">
          <Image
            className="object-cover rounded-full"
            height={50}
            width={50}
            src={"/avatar.png"}
            alt=""
          />
          <div className="user-info">
            <h2 className="text-2xl font-bold">John Doe</h2>
          </div>
        </div>
        <div className="flex gap-5 icons">
          <Image height={20} width={20} src={"/more.png"} alt="" />
          <Image height={20} width={20} src={"/video.png"} alt="" />
          <Image height={20} width={20} src={"/edit.png"} alt="" />
        </div>
      </div>
    </>
  );
};

export default UserInfo;
