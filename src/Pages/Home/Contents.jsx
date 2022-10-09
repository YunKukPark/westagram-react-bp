import React, { useEffect, useState } from 'react';
import Story from './Story';

const DATA_URL = 'http://localhost:3000/mock';

const Contents = () => {
  const [feedContents, setFeedContents] = useState([]);

  useEffect(() => {
    fetch(`${DATA_URL}/feed.json`)
      .then(res => res.json())
      .then(data => setFeedContents(data));
  }, []);

  return (
    <div className="main-left">
      <Story />
    </div>
  );
};

export default Contents;
