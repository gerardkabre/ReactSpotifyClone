import React from 'react';
import './TitleSubtitle.css';

const TitleSubtitle = ({ title, subtitle }) => (
  <div>
    <h1 className="title">{title}</h1>
    <p className="subtitle">{subtitle}</p>
  </div>
);

export default TitleSubtitle;
