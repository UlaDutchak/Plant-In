import React, { useState } from 'react';
import './Search.scss';
import blogs from '../../../api/blogs_interesting.json';
import { BlogCardNew } from '../BlogCardNew/BlogCardNew';
import { BlogCardTop } from '../BlogCardTop/BlogCardTop';
import { BlogCardInteresting } from '../BlogCardInteresting/BlogCardInteresting';

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');

  const findBlog = () => {
    const quertyInLowerCase = query.toLowerCase();
    let filteredBlogs = blogs;

    if (query) {
      filteredBlogs = blogs.filter(blog => (
        blog.title.toLowerCase().includes(quertyInLowerCase)
        || blog.description.toLowerCase().includes(quertyInLowerCase)
      ));
    }

    return filteredBlogs;
  };

  const filteredBlogs = findBlog();

  return (
    <>
      <div className="Search">
        <h1 className="Search__title">
          Stay always tuned with planting trends
        </h1>
        <p className="Search__text">
          Tips &amp; Tricks selected specially for you!
        </p>
        <input
          type="text"
          id="search"
          className="Search__input"
          placeholder="Search"
          value={query}
          onChange={(event => {
            setQuery(event.target.value);
          })}
        />
      </div>
      <section className="Main">
        <BlogCardNew blogs={filteredBlogs} />
        <div className="Main__topblogs-line Main__grey-line"></div>
        <p className="Main__topblogs-title Main__grey-title">top of the day</p>
        <div className="Main__wrapper">
          <BlogCardTop blogs={filteredBlogs} />
        </div>

        <div className="Main__interestingblogs-line Main__grey-line"></div>
        <p className="Main__interestingblogs-title Main__grey-title">interesting</p>
        <div className="Main__wrapper">
          <BlogCardInteresting blogs={filteredBlogs} />
        </div>
      </section>
    </>
  );
};
