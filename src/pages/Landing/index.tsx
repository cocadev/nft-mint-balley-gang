import { VFC } from 'react';

import { About, FirstBlock, MintSection, Roadmap, Team } from 'sections';

import { Header } from 'components';

const Landing: VFC = () => {
  return (
    <>
      <Header />
      <main>
        <FirstBlock />
        <MintSection />
        <About />
        <Roadmap />
        <Team />
      </main>
    </>
  );
};

export default Landing;
