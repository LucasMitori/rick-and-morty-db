import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ToastMessage = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { width: "260px", backgroundColor: "var(--color-grey-3)" },
  });

export const ToastError = (message) => {
  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    style: { width: "260px", backgroundColor: "var(--color-grey-3)" },
  });
};
