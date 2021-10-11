import React from 'react';
import './Footer.scss';

export const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <div className="Footer__wrapper">
        <div className="Footer__list">
          <a href="#blog" className="Footer__link">Terms of Service</a>
          <a href="#blog" className="Footer__link">Privacy Policy</a>
          <a href="#blog" className="Footer__link">Subscription Policy</a>
        </div>
        <div className="Footer__info">
          <p className="Footer__info">
            ©Copyright  © 2020 PlantIn.
          </p>
          <p className="Footer__info">
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
