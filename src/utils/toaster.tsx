import { ReactElement } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (
  msg: string | ReactElement<any, any>,
  type: 'success' | 'info' | 'error' = 'info',
  autoClose = 5000,
  onClick?: any,
) => {
  const options = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    className: 'notif-custom-css',
  } as ToastOptions;

  const notifyType = {
    success: () => toast.success(msg, { ...options, autoClose, onClick }),
    info: () => toast.info(msg, { ...options, autoClose, onClick }),
    error: () => toast.error(msg, { ...options, autoClose, onClick }),
  };

  notifyType[type]();
};
