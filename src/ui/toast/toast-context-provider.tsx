"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ToastProps } from "./@types";

export const ToastContext = createContext<{
  toasts: ToastProps[];
  setToasts: Dispatch<SetStateAction<ToastProps[]>>;
}>({ toasts: [], setToasts: () => {} });

// Type Interface for Toast Context Provider
interface ToastContextProviderProps {
  children: React.ReactNode;
}

export const ToastContextProvider = ({
  children,
}: ToastContextProviderProps) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  return (
    <ToastContext.Provider value={{ toasts, setToasts }}>
      {children}
    </ToastContext.Provider>
  );
};
