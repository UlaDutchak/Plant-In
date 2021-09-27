import React from 'react';
import './InfoBlock.scss';
import logo from '../../../Header/img/PlantIn.svg';
import union from '../../../Header/img/Union.svg';

export const InfoBlock: React.FC = () => {
  return (
    <div className="InfoBlock">
      <span>
        <img
          src={union}
          alt="union"
          className="InfoBlock__union"
        />
        <img
          src={logo}
          alt="logo"
          className="InfoBlock__logo"
        />
      </span>
      <h2 className="InfoBlock__title">
        Get unlimited access to exclusive articles
      </h2>
      <p className="InfoBlock__text">
        Get rid of limits and read everything you wish
      </p>
      <a
        href="https://myplantin.com/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="InfoBlock__button">
          Try For Free
        </button>
      </a>
    </div>
  );
};
