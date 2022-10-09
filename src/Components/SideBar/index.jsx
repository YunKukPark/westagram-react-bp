import React from 'react';
import Footer from './Footer';
import UserProfile from './UserProfile';
import RecommendList from './Recommend';
import './SideBar.scss';

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
