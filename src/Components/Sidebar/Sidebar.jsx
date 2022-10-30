import React from 'react';
import UserProfile from './UserProfile/UserProfile';
import RecommendList from './Recommend/&List';
import Footer from './Footer/Footer';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="main-right">
      <UserProfile />
      <RecommendList />
      <Footer />
    </aside>
  );
};

export default Sidebar;
