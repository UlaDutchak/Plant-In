import React, { useState, useEffect } from 'react';
import './Header.scss';
import { Nav } from './components/Nav/Nav';
import logo from './img/PlantIn.svg';
import union from './img/Union.svg';
import search from './img/search.svg';
import user from './img/Frame1235.svg';

const nameOfNav = ['Discover', 'My Plants', 'Diseases', 'Blog', 'FAQ', 'Contact Us'];

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
          <header className="App__header">
            {!isVisible && (
              <>
                <div className="App__header-wrapper">
                  <img
                    className="App__header-img"
                    src={union}
                    alt="unoin"
                  />
                  <img
                    className="App__header-logo"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="App__header-wrapper">
                  <a href="#search">
                    <img
                      className="App__header-search"
                      src={search}
                      alt="search"
                    />
                  </a>
                  <button
                    className="App__button"
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
                  className="App__button--close"
                  type="button"
                  onClick={handleChange}
                >
                  X
                </button>
                <Nav names={nameOfNav} />
              </>
            )}
          </header>
        )
        : (
          <header className="App__header App__header--desctop">
            <div className="header__container">
              <Nav names={nameOfNav} />
              <div className="App__header-wrapper">
                <a href="#search">
                  <img
                    className="App__header-search--desctop"
                    src={search}
                    alt="search"
                  />
                </a>
                <a href="#search">
                  <img
                    className="App__header-user"
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
