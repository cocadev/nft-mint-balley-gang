import { useCallback, useState, VFC } from 'react';

import { useWcContext } from 'context';

import { Button } from 'components';
import WalletsModal from 'components/WalletsModal/WalletsModal';
import { notify } from 'utils';

import { mint_bg } from 'assets/img';

import s from './MintSection.module.scss';

const MintSection: VFC = () => {
  const [value, setValue] = useState(1);
  const {
    mint,
    isMinting,
    pricePerToken,
    maxSupply,
    mintedAmount,
    account,
    userNftBalance,
    isModalOpen,
  } = useWcContext();

  const handleMint = useCallback(async () => {
    try {
      await mint(value);
    } catch (error) {
      console.log(error);
      notify('Something went wrong!');
    }
  }, [mint, value]);

  const handleChangeValue = useCallback(
    (newValue: number) => {
      if (newValue > 0) {
        setValue(newValue);
      }
    },
    [setValue],
  );

  return (
    <section className={s.section}>
      <WalletsModal isOpen={isModalOpen} />
      <div className={s.left}>
        <div className={s.mint}>
          <div className={s.title}>Mint Your Bally Gang NFT! </div>
          <div className={s.info}>
            <div className={s.subtitle}>
              Connected wallet:
              <span>
                {' '}
                {account?.address
                  ? `${account?.address.slice(0, 15)}...${account?.address.slice(-12)}`
                  : 'Not connected'}
              </span>
            </div>
            <div className={s.subtitle}>
              Price:<span> {pricePerToken} MATIC</span>
            </div>
            <div className={s.subtitle}>
              Minted:{' '}
              <span>
                {mintedAmount}/{maxSupply}
              </span>
            </div>
            <div className={s.subtitle}>
              Your balance:<span> {userNftBalance} NFTs</span>
            </div>
          </div>
          <div className={s.amount}>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={() => handleChangeValue(value - 1)}
              className={s.change}
            >
              -
            </div>
            <div className={s.value}>{value}</div>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={() => {}}
              onClick={() => handleChangeValue(value + 1)}
              className={s.change}
            >
              +
            </div>
          </div>
          <div className={s.center}>
            <Button loading={isMinting} onClick={handleMint}>
              {account?.address ? 'Mint now' : 'Connect'}
            </Button>
          </div>
        </div>
      </div>
      <div className={s.right}>
        <img src={mint_bg} alt="mint_bg" />
      </div>
    </section>
  );
};

export default MintSection;
