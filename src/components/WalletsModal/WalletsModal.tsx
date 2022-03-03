import { VFC } from 'react';

import { useWcContext } from 'context';

import { Button } from 'components';

import { cb_logo, mm_logo } from 'assets/img';

import s from './WalletsModal.module.scss';

interface IWalletsModalProps {
  isOpen: boolean;
}

const WalletsModal: VFC<IWalletsModalProps> = ({ isOpen }) => {
  console.log(isOpen);
  const { setIsModalOpen } = useWcContext();
  if (!isOpen) return null;
  return (
    <div className={s.modal}>
      <div className={s.innner}>
        <div className={s.header}>
          <Button onClick={() => setIsModalOpen(false)}>X</Button>
        </div>
        <div className={s.content}>
          <div className={s.title}>You need to connect an Ethereum wallet to continue</div>
          <div className={s.wallets}>
            <div className={s.walletsTitle}>Suggested wallets</div>
            <div className={s.walletsInner}>
              <a
                href="https://metamask.app.link/dapp/dnotrad.github.io/bally-gang/?utm_source=mm"
                target="_blank"
                rel="noopener noreferrer"
                className={s.wallet}
              >
                <img src={mm_logo} alt="mm_logo" />
              </a>
              <a
                href="https://go.cb-w.com/i9fZeMGipnb"
                target="_blank"
                rel="noopener noreferrer"
                className={s.wallet}
              >
                <img src={cb_logo} alt="cb_logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletsModal;
