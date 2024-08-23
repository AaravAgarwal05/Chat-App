import Image from "next/image";

const AddUser = () => {
  return (
    <>
      <div className="addUser w-max h-max p-8 bg-[rgba(17,25,40,0.8)] rounded-xl absolute top-0 bottom-0 left-0 right-0 m-auto">
        <form className="flex gap-5">
          <input
            className="p-5 rounded-xl border-none outline-none"
            type="text"
            placeholder="Username"
            name="username"
            id="username"
          />
          <button className="p-5 rounded-xl bg-[#1a73e8] text-white border-none cursor-pointer">
            Search
          </button>
        </form>
        <div className="user mt-12 flex items-center justify-between">
          <div className="detail flex items-center gap-5">
            <Image
              height={50}
              width={50}
              className="rounded-full object-cover"
              src="/avatar.png"
              alt=""
            />
            <span>Jane Doe</span>
          </div>
          <button className="p-2.5 rounded-xl bg-[#1a73e8] text-white border-none cursor-pointer">
            Add User
          </button>
        </div>
      </div>
    </>
  );
};

export default AddUser;
