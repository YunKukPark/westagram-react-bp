import React from 'react';
import Feeds from './Feeds';
import Story from './Story/Story';

const Contents = () => {
  return (
    <div className="main-left">
      <Story />
      <Feeds />
    </div>
  );
};

export default Contents;
