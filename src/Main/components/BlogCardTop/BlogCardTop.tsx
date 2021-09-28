import React from 'react';
import './BlogCardTop.scss';

type Props = {
  blogs: Blog[];
};

export const BlogCardTop: React.FC<Props> = (props) => {
  const { blogs } = props;

  return (
    <>
      {blogs.map(blog => {
        return (
          <>
            {blog.add === 'top of the day' && (
              <div
                id="Blog"
                className="BlogTop__wrapper"
                key={blog.id}
              >
                <div
                  className="BlogTop"
                >
                  <img
                    src={blog.img}
                    alt="blog logo"
                    className="BlogTop__img"
                  />
                  <div className="BlogTop__content">
                    <p className="BlogTop__data">
                      {blog.data}
                    </p>
                    <h2 className="BlogTop__title">
                      {blog.title}
                    </h2>
                    <p className="BlogTop__description">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};
