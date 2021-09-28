/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './Search.scss';
import axios from 'axios';
import blogs from '../../../api/blogs_interesting.json';
import { BlogCardNew } from '../BlogCardNew/BlogCardNew';
import { BlogCardTop } from '../BlogCardTop/BlogCardTop';
import { BlogCardInteresting } from '../BlogCardInteresting/BlogCardInteresting';

export const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1088);

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

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=a7246266d8ead6abecff75ebd88575a6&units=metric',
    })
      .then((response) => {
        setWeather(response.data.main.temp.toFixed());
      });
  }, [weather]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const ismobile = window.innerWidth < 1088;

      if (ismobile !== isMobile) {
        setIsMobile(ismobile);
      }
    }, false);
  }, [isMobile]);

  const filteredBlogs = findBlog();

  return (
    <>
      <div className="Search">
        <h1 className="Search__title">
          Stay always tuned with planting trends
        </h1>
        <p className="Search__text">
          {isMobile
            ? (
              <>
                <b>Tips&amp;Tricks</b>
                &nbsp;selected specially&nbsp;
                <b>for you!</b>
              </>
            )
            : (
              `Current temperature is: ${weather}°C`
            )}
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
        <div className="Main__wrapper" id="scrolling-container">
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
