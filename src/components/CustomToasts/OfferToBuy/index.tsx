import { VFC } from 'react';
import s from '../index.module.scss';

interface IProps {
  tokensLeft: number;
  amountOfTokensToMint: number;
}

const OfferToBuy: VFC<IProps> = ({ tokensLeft, amountOfTokensToMint }) => {
  return (
    <>
      <span>
        You cannot mint {amountOfTokensToMint} tokens, as there are only {tokensLeft} left. Would
        you like to mint {tokensLeft} instead? <span className={s.button}>YES!</span>
      </span>
    </>
  );
};

export default OfferToBuy;
