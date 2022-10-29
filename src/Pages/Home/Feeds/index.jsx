import React, { useEffect, useState } from 'react';
import Feed from './Feed/Feed';

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
      {feedContents.map(feed => (
        <Feed key={feed.feedId} feed={feed} />
      ))}
    </>
  );
};

export default Feeds;
