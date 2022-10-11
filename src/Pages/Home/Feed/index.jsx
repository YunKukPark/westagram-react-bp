import React, { useEffect, useState } from 'react';
import Feed from './&Item';
import './Feeds.scss';

const DATA_URL = '/mock/response';

const Feeds = () => {
  const [feedContents, setFeedContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${DATA_URL}/feeds.json`)
      .then(res => res.json())
      .then(data => setFeedContents(data));

    setIsLoading(false);
  }, []);

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {feedContents.map(({ feedId, ...feedContent }) => (
        <Feed key={feedId} {...feedContent} />
      ))}
    </>
  );
};

export default Feeds;
