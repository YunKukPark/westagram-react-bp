import React, { useEffect, useState } from 'react';
import Feeds from './Feed';
import Story from './Story';

const Contents = () => {
  return (
    <div className="main-left">
      <Story />
      <Feeds />
    </div>
  );
};

export default Contents;
