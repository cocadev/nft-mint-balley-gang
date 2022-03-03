import { VFC } from 'react';

import s from './FirstBlock.module.scss';

import { arrow_down, logo_title } from 'assets/img';

const FirstBlock: VFC = () => {
  return (
    <>
      <section className={s.block}>
        <img src={logo_title} alt="logo" />
      </section>
      <div className={s.arrow}>
        <img src={arrow_down} alt="arrow_down" />
      </div>
    </>
  );
};

export default FirstBlock;
