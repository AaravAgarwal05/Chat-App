"use client";
import { useState } from "react";
import Image from "next/image";
import showToast from "../showToast/showToast";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleAvatar = async (e) => {
    const image = e.target.files[0];
    if (image.size > 1024 * 1024 * 5) {
      showToast("Image size is too large", "error");
      return;
    }
    setAvatar({
      file: image,
      url: URL.createObjectURL(image),
    });
  };

  const handleLogInChange = (e) => {
    setLogInForm({
      ...logInForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpChange = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {
      console.log(logInForm);
      const res = await axios.post("/api/users/logIn", logInForm);
      if (res.data.status === 200) {
        showToast(res.data.message, "success");
        setTimeout(() => {
          window.location.reload();
        }, 5000);
        setIsLoading((prev) => !prev);
        setLogInForm({
          email: "",
          password: "",
        });
      } else {
        showToast(res.data.message, "error");
        setIsLoading((prev) => !prev);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/users/signUp", signUpForm);
      if (res.data.status === 200) {
        const fileName = `${Date.now()}-${avatar.file.name.replace(" ", "-")}`;
        const res2 = await axios.post("/api/users/getSignedURL", {
          fileName: fileName,
        });
        if (res2.data.status === 200) {
          const signedUrl = res2.data.url;
          await axios.put(signedUrl, avatar.file);
          const res3 = await axios.post("/api/users/updateImageURL", {
            email: signUpForm.email,
            fileName: fileName,
          });
          if (res3.data.status === 200) {
            showToast(res.data.message, "success");
            setIsLoading((prev) => !prev);
            setSignUpForm({
              name: "",
              username: "",
              email: "",
              password: "",
            });
            setAvatar({
              file: null,
              url: "",
            });
          } else {
            showToast(res3.data.message, "error");
            setIsLoading((prev) => !prev);
          }
        } else {
          showToast(res2.data.message, "error");
          setIsLoading((prev) => !prev);
        }
      } else {
        showToast(res.data.message, "error");
        setIsLoading((prev) => !prev);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };

  return (
    <>
      <div className="flex items-center w-full h-full gap-24 login">
        <div className="item flex-[1] flex flex-col items-center gap-5 w-full">
          <h2 className="text-2xl font-medium">Welcome back,</h2>
          <form
            className="flex flex-col items-center justify-center w-1/2 gap-5"
            onSubmit={(e) => {
              handleLogIn(e);
            }}
          >
            {Object.entries(logInForm).map(([key, value]) => (
              <div className="w-full h-full" key={key}>
                <div className="flex flex-col w-full gap-1">
                  <label
                    className="self-start text-lg font-normal"
                    htmlFor={key}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                    type={key === "password" ? "password" : "text"}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value}
                    onChange={(e) => handleLogInChange(e)}
                    name={key}
                    id={key}
                  />
                </div>
              </div>
            ))}
            <button
              className="w-full p-5 border-none outline-none text-white rounded-md cursor-pointer bg-[#1f8ef1] font-medium flex justify-center items-center"
              type="submit"
              onClick={() => {
                if (!isLoading) {
                  setIsLoading((prev) => !prev);
                }
              }}
            >
              {isLoading ? (
                <TailSpin
                  visible={true}
                  height="24"
                  width="24"
                  color="#fff"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
        <div className="separator h-4/5 w-0.5 bg-[#dddddd35]"></div>
        <div className="item flex-[1] flex flex-col items-center gap-5 w-full">
          <h2 className="text-2xl font-medium">Create an Account</h2>
          <form
            className="flex flex-col items-center justify-center w-1/2 gap-5"
            onSubmit={(e) => {
              handleSignIn(e);
            }}
          >
            <label
              className="flex items-center self-start justify-center w-full h-12 gap-10 text-lg font-normal underline cursor-pointer"
              htmlFor="file"
            >
              <Image
                height={60}
                width={60}
                src={avatar.url || "/avatar.png"}
                alt=""
                className="object-cover rounded-xl opacity-60"
              />
              Upload an Image
            </label>
            <input
              className="hidden p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
              type="file"
              name="file"
              accept="image/*"
              id="file"
              onChange={(e) => {
                handleAvatar(e);
              }}
            />
            {Object.entries(signUpForm).map(([key, value]) => (
              <div className="w-full h-full" key={key}>
                <div className="flex flex-col w-full gap-1">
                  <label
                    className="self-start text-lg font-normal"
                    htmlFor={key}
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <input
                    className="p-5 border-none outline-none bg-[rgba(17,25,40,0.6)] text-white rounded-md"
                    type={key === "password" ? "password" : "text"}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    value={value}
                    onChange={(e) => handleSignUpChange(e)}
                    name={key}
                    id={key}
                  />
                </div>
              </div>
            ))}
            <button
              className="w-full p-5 border-none outline-none text-white rounded-md cursor-pointer bg-[#1f8ef1] font-medium flex justify-center items-center"
              type="submit"
              onClick={() => {
                if (!isLoading) {
                  setIsLoading((prev) => !prev);
                }
              }}
            >
              {isLoading ? (
                <TailSpin
                  visible={true}
                  height="24"
                  width="24"
                  color="#fff"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
