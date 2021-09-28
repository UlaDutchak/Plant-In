import React from 'react';
import './BlogCardNew.scss';
import logo from '../../img/Frame1236.svg';

type Props = {
  blogs: Blog[];
};

export const BlogCardNew: React.FC<Props> = (props) => {
  const { blogs } = props;

  return (
    <>
      {blogs.map(blog => {
        return (
          <>
            {blog.add === 'new' && (
              <>
                <img
                  className="Blog__new-img"
                  src={logo}
                  alt="new blog"
                />
                <div
                  id="Blog"
                  className="wrapper"
                  key={blog.id}
                >
                  <div
                    className="Blog"
                  >
                    <img
                      src={blog.img}
                      alt="blog logo"
                      className="Blog__img"
                    />
                    <div className="Blog__content">
                      <p className="Blog__data">
                        {blog.data}
                      </p>
                      <h2 className="Blog__title">
                        {blog.title}
                      </h2>
                      <p className="Blog__description">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        );
      })}
    </>
  );
};
