import { toast, Bounce } from "react-toastify";

interface ToastOptions {
  position: "top-right";
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  progress: undefined;
  theme: "dark";
  transition: typeof Bounce;
}

type ToastType = "success" | "error";

const showToast = (message: string, type: ToastType): void => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  };
  if (type === "success") {
    toast.success(message, toastOptions);
  } else {
    toast.error(message, toastOptions);
  }
};

export default showToast;