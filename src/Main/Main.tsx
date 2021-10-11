import React from 'react';
import './Main.scss';
import { Search } from './components/Search/Search';

export const Main: React.FC = () => {
  return (
    <div className="Main container">
      <Search />
    </div>
  );
};
