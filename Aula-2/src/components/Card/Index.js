import React from 'react';
import SubTitle from '../SubTitle/Index';
import SubTitleH3 from '../SubTitleH3/Index';
import './card.css';

const Card = ({ subTitle, subTitleH3, date, info }) => (
  <div>
    <SubTitle texto={subTitle} />
    <SubTitleH3 subTitleH3={subTitleH3} />
    <div className="info">
      <span className="highlight"> {date}</span>
    </div>
    <p>{info}</p>
  </div>
);

export default Card;
