import React from 'react';
import './header.css';

const Header = () => (
  <header>
    <nav id="navbar">
      <div className="profile">
        <img src="https://via.placeholder.com/200x200" alt="profile_picture" />
      </div>
      <ul>
        <li>
          <a href="#about">Sobre</a>
        </li>
        <li>
          <a href="#experience">Experiência</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
