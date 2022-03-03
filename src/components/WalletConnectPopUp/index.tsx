import { VFC } from 'react';
import cn from 'classnames';

import { useWcContext } from 'context';

import s from './index.module.scss';

import { metamask, wallet_connect, ArrowRight } from 'assets';

interface IProps {
  active: boolean;
}

const WalletConnectPopUp: VFC<IProps> = ({ active }) => {
  const { connect, account, disconnect } = useWcContext();
  return (
    <div className={cn(s.popup, { [s.active]: active })}>
      <div className={s.inner}>
        {account?.address ? (
          <>
            <div className={s.title}>{`${account.address.slice(0, 12)}...${account.address.slice(
              -7,
            )}`}</div>
            <button type="button" onClick={() => disconnect()} className={s.wallet}>
              <div className={s.wallet_title}>Disconnect</div>
            </button>
          </>
        ) : (
          <>
            <div className={s.title}>Available wallet</div>
            <button type="button" onClick={() => connect('MetaMask')} className={s.wallet}>
              <div className={s.wallet_icon}>
                <img src={metamask} alt="Metamask logo" />
              </div>
              <div className={s.wallet_title}>Metamask</div>
              <ArrowRight />
            </button>
            <button type="button" onClick={() => connect('WalletConnect')} className={s.wallet}>
              <div className={s.wallet_icon}>
                <img src={wallet_connect} alt="Wallet connect logo" />
              </div>
              <div className={s.wallet_title}>Wallet Connect</div>
              <ArrowRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default WalletConnectPopUp;
