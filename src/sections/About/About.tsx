import { VFC } from 'react';

import s from './About.module.scss';

import { about_bg, about_title, roadmap_title } from 'assets/img';

const About: VFC = () => {
  return (
    <section className={s.about}>
      <div className={s.content}>
        <div className={s.left}>
          <img src={about_bg} alt="about_bg" />
        </div>
        <div className={s.right}>
          <img className={s.right_title} src={about_title} alt="about_title" />
          <div className={s.text}>
            The Bally Gang NFT is a collection of 8,888 NFT’s with real life and virtual utilities.
            With over 300 traits, each NFT is unique and exclusive. Launching on the Ethereum
            Blockchain the Bally Gang NFT is offering high quality 3D art.
          </div>
        </div>
      </div>
      <div className={s.roadmap}>
        <div className={s.roadmap_title}>
          <img src={roadmap_title} alt="roadmap_title" />
        </div>
        <div className={s.video}>
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/6TCBjoY8tAM?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default About;
