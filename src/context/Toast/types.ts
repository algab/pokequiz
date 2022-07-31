import React from "react";

export type Props = {
  children: React.ReactNode;
};

export type Toast = {
  handleToast: (state: StateToast) => void;
};

export type StateToast = {
  type: 'info' | 'success' | 'warning' | 'error' | 'default',
  message: string,
};
