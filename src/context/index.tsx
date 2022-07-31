import React from 'react';

import { ToastProvider } from './Toast';
import { Props } from './types';

const Context: React.FC<Props> = ({ children }) => <ToastProvider>{children}</ToastProvider>;

export default Context;
