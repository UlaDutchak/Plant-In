import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Nav } from './components/Nav/Nav';
import logo from './img/PlantIn.svg';
import union from './img/Union.svg';
import search from './img/search.svg';
import user from './img/Frame1235.svg';
import navName from '../api/nav.json';

export const Header: React.FC = () => {
  const [isVisible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1088);
  const handleChange = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1088;

      if (ismobile !== isMobile) {
        setIsMobile(ismobile);
      }
    }, false);
  }, [isMobile]);

  return (
    <div className="App">
      {isMobile
        ? (
          <header className="Header">
            {!isVisible && (
              <>
                <div className="Header-wrapper">
                  <img
                    className="Header-img"
                    src={union}
                    alt="unoin"
                  />
                  <img
                    className="Header-logo"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="Header-wrapper">
                  <a href="#search">
                    <img
                      className="Header-search"
                      src={search}
                      alt="search"
                    />
                  </a>
                  <button
                    className="Header__button"
                    type="button"
                    onClick={handleChange}
                  >
                  </button>
                </div>
              </>
            )}
            {isVisible && (
              <>
                <button
                  className="Header__button--close"
                  type="button"
                  onClick={handleChange}
                >
                  X
                </button>
                <Nav nav={navName} />
              </>
            )}
          </header>
        )
        : (
          <header className="Header Header--desktop">
            <div className="header__container">
              <Nav nav={navName} />
              <div className="Header-wrapper">
                <a href="#search">
                  <img
                    className="Header-search--desktop"
                    src={search}
                    alt="search"
                  />
                </a>
                <a href="#search">
                  <img
                    className="Header-user"
                    src={user}
                    alt="user"
                  />
                </a>
              </div>
            </div>
          </header>
        )}
    </div>
  );
};
