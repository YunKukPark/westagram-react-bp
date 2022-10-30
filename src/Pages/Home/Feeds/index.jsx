import React, { useEffect, useState } from 'react';
import FetchMore from './FetchMore';
import Feed from './Feed/Feed';

const DATA_URL = '/mock/response';

const PAGE_LIMIT = 9;

const Feeds = () => {
  const [page, setPage] = useState(1);
  const [feedContents, setFeedContents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${DATA_URL}/feeds/${page}.json`)
      .then(res => res.json())
      .then(data => setFeedContents([...feedContents, ...data]));

    setIsLoading(false);
  }, [page]);

  if (isLoading) return <p>loading...</p>;

  return (
    <>
      {feedContents.map(feed => (
        <Feed key={feed.feedId} feed={feed} />
      ))}
      {page <= PAGE_LIMIT && <FetchMore page={page} setPage={setPage} />}
    </>
  );
};

export default Feeds;
