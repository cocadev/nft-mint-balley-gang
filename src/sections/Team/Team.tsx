import { VFC } from 'react';

import { data } from './Team.helper';

import { team_title } from 'assets';

import s from './Team.module.scss';

interface ITeamItemProps {
  title: string;
  subtitle: string;
  image: string;
}

const TeamItem: VFC<ITeamItemProps> = ({ title, subtitle, image }) => {
  return (
    <li>
      <div className={s.image}>
        <img src={image} alt="avatar" />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>{subtitle}</div>
    </li>
  );
};

const Team: VFC = () => {
  return (
    <section className={s.section}>
      <div className={s.sectionTitle}>
        <img src={team_title} alt="team" />
      </div>
      <div className={s.inner}>
        <ul className={s.list}>
          {data.map(({ title, subtitle, image }) => (
            <TeamItem key={title} title={title} subtitle={subtitle} image={image} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Team;
