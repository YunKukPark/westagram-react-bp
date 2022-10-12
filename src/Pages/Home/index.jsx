import React from 'react';
import Nav from 'Components/Nav';
import Contents from './Contents';
import Sidebar from 'Components/Sidebar';
import './Home.scss';

const USER_INFO_URL = 'https://westagram-signup.herokuapp.com/profile';

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <main>
        <Contents />
        <Sidebar />
      </main>
    </div>
  );
};

export default Home;
