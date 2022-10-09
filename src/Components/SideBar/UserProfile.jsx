import React from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import Avatar from 'Components/Avatar';

// TODO: Avatar 컴포넌트로 분리
const UserProfile = () => {
  return (
    <section className="user-profile">
      <div className="avatar-wrapper-66 is-user-profile">
        <Avatar size="large" to="#" image={avatar} />
      </div>

      <div className="user-info">
        <strong>
          <Link to="#"> seha_park._._ </Link>
        </strong>
        <span>박윤국 || 박세하</span>
      </div>
      <button className="button-primary" type="button">
        전환
      </button>
    </section>
  );
};

export default UserProfile;
