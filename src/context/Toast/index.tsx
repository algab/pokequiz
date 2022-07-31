import { createContext, useCallback } from "react";
import { ToastContainer, toast } from "react-toastify";

import { Props, StateToast, Toast } from "./types";

const ToastContext = createContext<Toast>({} as Toast);

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const handleToast = useCallback((state: StateToast) => {
    toast(state.message, { type: state.type });
  }, []);

  return (
    <ToastContext.Provider value={{ handleToast }}>
      {children}
      <ToastContainer theme="colored" autoClose={3000} />
    </ToastContext.Provider>
  )
};

export default ToastContext;
