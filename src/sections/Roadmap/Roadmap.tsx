import { VFC } from 'react';

import { data } from './Roadmap.helper';

import s from './Roadmap.module.scss';

interface IRoadmapItemProps {
  title: string;
  subtitle: string;
  list: Array<string>;
}

const RoadmapItem: VFC<IRoadmapItemProps> = ({ title, subtitle, list }) => {
  return (
    <li>
      <div className={s.title}>{title}</div>
      <div className={s.subtitle}>{subtitle}</div>
      <ul className={s.features}>
        {list.map((feature) => (
          <li key={feature} className={s.feature}>
            {feature}
          </li>
        ))}
      </ul>
    </li>
  );
};

const Roadmap: VFC = () => {
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <ul className={s.list}>
          {data.map(({ title, subtitle, list }) => (
            <RoadmapItem key={title} title={title} subtitle={subtitle} list={list} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;
