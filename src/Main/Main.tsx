import React from 'react';
import './Main.scss';
import { Search } from './components/Search/Search';
// import { BlogCards } from './components/BlogCardsList/BlogCards';
// import blogs from '../api/blogs_interesting.json';

export const Main: React.FC = () => {
  return (
    <div className="Main container">
      <Search />
      {/* <section className="Main">
        <BlogCards blogs={blogs} />
      </section> */}
    </div>
  );
};
