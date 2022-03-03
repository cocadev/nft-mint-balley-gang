import { VFC } from 'react';
import s from '../index.module.scss';

import { contractConfig } from 'config';

interface IProps {
  type: 'single' | 'multiply';
  nftId?: string;
}

const MintSuccess: VFC<IProps> = ({ type, nftId }) => {
  return (
    <>
      {type === 'multiply' ? (
        <span>
          You can find your NFTs{' '}
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer noopener"
            href="https://opensea.io/account"
          >
            here
          </a>
        </span>
      ) : (
        <span>
          Your NFT is{' '}
          <a
            className={s.link}
            target="_blank"
            rel="noreferrer noopener"
            href={`https://opensea.io/assets/mumbai/${contractConfig.address}/${nftId}`}
          >
            here
          </a>
        </span>
      )}
    </>
  );
};

export default MintSuccess;
