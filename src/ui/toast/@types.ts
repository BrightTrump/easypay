export interface ToastProps {
  type?: string;
  title?: string;
  name?: string;
  message?: string;
}

export type ToastTypes = "success" | "error" | "info";
