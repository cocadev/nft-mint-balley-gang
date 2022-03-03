import { VFC } from 'react';

import s from './index.module.scss';

import { inst, ds, twitter } from 'assets/img';

const Header: VFC = () => {
  return (
    <header className={s.header}>
      <div className={s.inner}>
        <div className={s.links_inner}>
          <a
            href="https://www.instagram.com/ballygangnft/"
            target="_blank"
            rel="noreferrer noopener"
            className={s.link}
          >
            <img src={inst} alt="instagram link" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://discord.com/invite/7kBeXAFyUy"
            className={s.link}
          >
            <img src={ds} alt="discord link" />
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/ballygangnft"
            className={s.link}
          >
            <img src={twitter} alt="twitter link" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
