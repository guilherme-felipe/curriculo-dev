import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Index';
import Section from '../../components/Section/Index';

const Home = () => {
  const [dados, setDados] = useState();

  useEffect(async () => {
    const response = await fetch(
      'https://curriculo-dev-backend.herokuapp.com/api/v1/data-curriculo'
    );

    setDados(await response.json());
  }, []);

  return (
    <body>
      {dados ? (
        <>
          <Header img={dados.profile.img} />
          <main>
            <Section profile={dados.profile} />
          </main>
        </>
      ) : (
        <></>
      )}
    </body>
  );
};

export default Home;
