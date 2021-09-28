import './Nav.scss';
import React, { useEffect, useState } from 'react';

type Props = {
  nav: Nav[];
};

export const Nav: React.FC<Props> = (props) => {
  const { nav } = props;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1088);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1088;

      if (ismobile !== isMobile) {
        setIsMobile(ismobile);
      }
    }, false);
  }, [isMobile]);

  return (
    <>
      <nav className="Nav">
        <ul className="Nav__list">
          {nav.map((el) => {
            return (
              <li
                className="Nav__item"
                key={el.id}
              >
                <a
                  className="Nav__link"
                  href={el.url}
                >
                  {el.name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
