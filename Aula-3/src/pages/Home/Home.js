import React, { useState } from 'react';
import Header from '../../components/Header/Index';
import Section from '../../components/Section/Index';
import FakeAPI from '../../service/dados.json';

const Home = () => {
  const [dados] = useState(FakeAPI);

  return (
    <>
      <body>
        <Header img={dados.profile.img} />
        <main>
          <Section profile={dados.profile} />
        </main>
      </body>
    </>
  );
};

export default Home;
