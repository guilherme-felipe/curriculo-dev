import React from 'react';
import Card from '../Card/Index';
import SubTitle from '../SubTitle/Index';
import Title from '../Title/Index';
import './section.css';

const Section = () => (
  <>
    <section id="about">
      <Title texto="Olá pessoal, sou o" />
      <h1 className="section-heading">
        Guilherme <span className="highlight">Felipe</span>
      </h1>
      <div className="info">
        Uberaba - MG - (34) 9999-9999 -
        <span className="highlight"> guilhermefelipesimao@gmail.com</span>
      </div>
      <p>
        Olá me chamo Guilherme, tenho 25 anos, conclui Engenharia da Computação.
        Sempre envolvido na área de tecnologia e empreendedorismo, levo estes
        recursos para a vida profissional nas formas de agregar novas
        tecnologias, facilidade de trabalhar em grupos, bom relacionamento com
        as pessoas e responsabilidade. Paixão pelo idioma Inglês e novas
        experiências na área de Blockchain, metodologias ágeis, educação e
        medicina.
      </p>
      <div className="contacts">
        <a
          href="https://github.com/guilherme-felipe"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/guilherme-felipe-762855116/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </section>
    <section id="experience">
      <Title texto="Experiência" />
      <Card
        subTitle="Desenvolvedor full stack"
        subTitleH3="Grão Direto"
        date="Julho 2021 - Atual"
        info="Atuo na análise e elaboração de sistemas."
      />

      <Card
        subTitle="Analista de Sistemas Jr"
        subTitleH3="Uniube"
        date="Fev 2019 - Julho 2021"
        info="Atuei na análise e elaboração de sistemas para a Universidade."
      />

      <Card
        subTitle="Analista de Sistemas Pleno"
        subTitleH3="EWTI"
        date="set 2018 - Julho 2021"
        info="Atuei na análise e elaboração de sistemas para uma software house."
      />

      <Card
        subTitle="Tech Leader"
        subTitleH3="Invest In Me"
        date="dez 2020 - Maio 2021"
        info="Atuei na liderança da equipe de desenvolvimento do aplicativo Invest
            In Me que consiste em ajudar ME a conseguir investimentos no
            mercado."
      />
    </section>
    <section id="skills">
      <Title texto="Habilidades" />
      <SubTitle texto="Em desenvolvimento ACQA" />
    </section>
    <section id="projects">
      <Title texto="Projetos" />
      <SubTitle texto="Em desenvolvimento ACQA" />
    </section>
  </>
);

export default Section;
