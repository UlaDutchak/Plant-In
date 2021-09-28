import React, { useEffect, useState } from 'react';
import './BlogCardInteresting.scss';
import { InfoBlock } from '../InfoBlock/InfoBlock';

type Props = {
  blogs: Blog[];
};

export const BlogCardInteresting: React.FC<Props> = (props) => {
  const { blogs } = props;
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
      {blogs.map(blog => {
        return (
          <>
            {blog.add === 'interesting' && (
              <>
                <div
                  id="Blog"
                  className="BlogInteresting__wrapper"
                  key={blog.id}
                >
                  <div
                    className="BlogInteresting"
                  >
                    <img
                      src={blog.img}
                      alt="blog logo"
                      className="BlogInteresting__img"
                    />
                    <div className="BlogInteresting__content">
                      <p className="BlogInteresting__data">
                        {blog.data}
                      </p>
                      <h2 className="BlogInteresting__title">
                        {blog.title}
                      </h2>
                      <p className="BlogInteresting__description">
                        {blog.description}
                      </p>
                    </div>
                  </div>
                </div>
                {isMobile
                  ? (
                    <div>
                      {blog.id === '3' && (
                        <InfoBlock />
                      )}
                    </div>
                  )
                  : (
                    <div>
                      {blog.id === '6' && (
                        <InfoBlock />
                      )}
                    </div>
                  )}
              </>
            )}
          </>
        );
      })}
    </>
  );
};
