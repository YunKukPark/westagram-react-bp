import React from 'react';
import UserProfile from './UserProfile';
import RecommendList from './Recommend';
import Footer from './Footer';
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
