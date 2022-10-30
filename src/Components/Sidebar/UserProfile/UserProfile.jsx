import React from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import Avatar from 'Components/Avatar/Avatar';
import './UserProfile.scss';

const UserProfile = () => {
  return (
    <section className="user-profile">
      <div className="avatar-wrapper-66 is-user-profile">
        <Avatar size="large" to="#" image={avatar} />
      </div>

      <div className="user-info">
        <strong>
          <Link to="#"> seha_park </Link>
        </strong>
        <span>박세하</span>
      </div>
      <button className="button-primary" type="button">
        전환
      </button>
    </section>
  );
};

export default UserProfile;
