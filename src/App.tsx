import { FC } from 'react';
import { ToastContainer } from 'react-toastify';

import { WalletConnectContext } from 'context';

import { Landing } from 'pages';

export const App: FC = () => {
  return (
    <WalletConnectContext>
      <ToastContainer />
      <Landing />
    </WalletConnectContext>
  );
};
