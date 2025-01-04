"use client";
import { useState } from "react";
import Image from "next/image";
import showToast from "../showToast/showToast";
import axios from "axios";

const Login = () => {
  interface Avatar {
    file: File | null;
    url: string;
  }

  interface SignUpForm {
    name: string;
    username: string;
    email: string;
    password: string;
  }

  interface LogInForm {
    email: string;
    password: string;
  }

  const [avatar, setAvatar] = useState<Avatar>({ file: null, url: "" });
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [logInForm, setLogInForm] = useState<LogInForm>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  interface HandleAvatarEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleAvatar = async (e: HandleAvatarEvent): Promise<void> => {
    const image = e.target.files[0];
    if (image.size > 1024 * 1024 * 5) {
      showToast("Image size is too large", "error");
      return;
    }
    setAvatar({ file: image, url: URL.createObjectURL(image) });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formType: "login" | "signup"
  ): void => {
    const { name, value } = e.target;
    if (formType === "login") {
      setLogInForm({ ...logInForm, [name]: value });
    } else {
      setSignUpForm({ ...signUpForm, [name]: value });
    }
  };

  const handleLogIn = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/api/users/logIn", logInForm);
      if (res.data.status === 200) {
        showToast(res.data.message, "success");
        setTimeout(() => window.location.reload(), 5000);
      } else {
        showToast(res.data.message, "error");
      }
    } catch (error) {
      showToast("An error occurred during login", "error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/api/users/signUp", signUpForm);
      if (res.data.status === 200) {
        const fileName = `${Date.now()}-${avatar.file!.name.replace(" ", "-")}`;
        const res2 = await axios.post("/api/users/getSignedURL", { fileName });
        if (res2.data.status === 200) {
          const signedUrl = res2.data.url;
          await axios.put(signedUrl, avatar.file!);
          const res3 = await axios.post("/api/users/updateImageURL", {
            email: signUpForm.email,
            fileName,
          });
          if (res3.data.status === 200) {
            showToast(res.data.message, "success");
            setTimeout(() => window.location.reload(), 5000);
          } else {
            showToast(res3.data.message, "error");
          }
        } else {
          showToast(res2.data.message, "error");
        }
      } else {
        showToast(res.data.message, "error");
      }
    } catch (error) {
      showToast("An error occurred during sign up", "error");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center w-full h-full gap-24 login">
      <div className="item flex-[1] flex flex-col items-center gap-5 w-full">
        <h2 className="text-2xl font-medium">Welcome back,</h2>
        <form className="flex flex-col items-center justify-center w-1/2 gap-5" onSubmit={handleLogIn}>
          {Object.entries(logInForm).map(([key, value]) => (
            <div className="w-full h-full" key={key}>
              <div className="flex flex-col w-full gap-1">
                <label className="self-start text-lg font-normal" htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                  type={key === "password" ? "password" : "text"}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  onChange={(e) => handleInputChange(e, "login")}
                  name={key}
                  id={key}
                />
              </div>
            </div>
          ))}
          <button className="w-full p-5 border-none outline-none text-white rounded-md cursor-pointer bg-[#1f8ef1] font-medium flex justify-center items-center" type="submit">
            {isLoading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>

      <div className="separator h-4/5 w-0.5 bg-[#dddddd35]"></div>

      <div className="item flex-[1] flex flex-col items-center gap-5 w-full">
        <h2 className="text-2xl font-medium">Create an Account</h2>
        <form className="flex flex-col items-center justify-center w-1/2 gap-5" onSubmit={handleSignUp}>
          <label className="flex items-center self-start justify-center w-full h-12 gap-10 text-lg font-normal underline cursor-pointer" htmlFor="file">
            <Image height={60} width={60} src={avatar.url || "/avatar.png"} alt="Avatar" className="object-cover rounded-xl opacity-60" />
            Upload an Image
          </label>
          <input
            className="hidden"
            type="file"
            name="file"
            accept="image/*"
            id="file"
            onChange={handleAvatar}
          />
          {Object.entries(signUpForm).map(([key, value]) => (
            <div className="w-full h-full" key={key}>
              <div className="flex flex-col w-full gap-1">
                <label className="self-start text-lg font-normal" htmlFor={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                  type={key === "password" ? "password" : "text"}
                  placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                  value={value}
                  onChange={(e) => handleInputChange(e, "signup")}
                  name={key}
                  id={key}
                />
              </div>
            </div>
          ))}
          <button className="w-full p-5 border-none outline-none text-white rounded-md cursor-pointer bg-[#1f8ef1] font-medium flex justify-center items-center" type="submit">
            {isLoading ? "Loading..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
