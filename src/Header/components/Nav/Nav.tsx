import './Nav.scss';
import React, { useEffect, useState } from 'react';

type Props = {
  names: string[];
};

export const Nav: React.FC<Props> = (props) => {
  const { names } = props;
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
      <nav className={`${isMobile ? 'Nav' : 'Nav--desctop'}`}>
        <ul className={`${isMobile ? 'Nav__list' : 'Nav__list--desctop'}`}>
          {names.map((name: string) => {
            return (
              <li
                className="Nav__item"
                key={names.length}
              >
                <a
                  className={`${isMobile ? 'Nav__link' : 'Nav__link--desctop'}`}
                  href={`#${name}`}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
