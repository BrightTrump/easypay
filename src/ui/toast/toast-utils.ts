import { useContext } from "react";
import { ToastProps } from "./@types";

import { ToastContext } from "./toast-context-provider";

interface CallToastProps extends ToastProps {}
export function useToast() {
  const { setToasts } = useContext(ToastContext);

  const callToast = ({ type, title, message }: CallToastProps) => {
    setToasts((prevToasts: ToastProps[]) => [
      ...prevToasts,
      { title, message, type },
    ]);
  };

  return {
    callToast,
  };
}
