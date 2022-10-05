import React, { useEffect, useRef, useState } from 'react';
import Footer from './Footer';
import UserProfile from './UserProfile';
import './SideBar.scss';
import RecommendList from './Recommend/List';

const Sidebar = props => {
  return (
    <aside className="main-right">
      <UserProfile />
      <RecommendList />
      <Footer />
    </aside>
  );
};

export default Sidebar;
