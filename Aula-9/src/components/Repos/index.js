import React, { useEffect, useState } from 'react';
import {
  Content,
  PageCard,
  PageContent,
  RepoBtn,
  RepoDesc,
  RepoTitle,
} from './styles';

const Repo = () => {
  const [repo, setRepo] = useState();

  useEffect(async () => {
    const response = await fetch(
      'https://api.github.com/users/guilherme-felipe/repos'
    );

    setRepo(await response.json());
  }, []);
  console.log(repo);
  return (
    <>
      {repo ? (
        <div>
          <h1>Total: {repo.length}</h1>
          <PageContent>
            {repo.map((repositorio) => (
              <PageCard key={repositorio.id}>
                <Content>
                  <RepoTitle>{repositorio.name}</RepoTitle>
                  <RepoDesc>{repositorio.description}</RepoDesc>
                  <RepoBtn target="_blank" href={repositorio.html_url}>
                    Ver Repositório
                  </RepoBtn>
                </Content>
              </PageCard>
            ))}
          </PageContent>
        </div>
      ) : (
        <h1>Nenhum repositório encontrado.</h1>
      )}
    </>
  );
};

export default Repo;
