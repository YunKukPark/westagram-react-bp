import React, { memo } from 'react';
import Avatar from 'Components/Avatar';
import { Link } from 'react-router-dom';

const Header = ({ userAvatar, userName }) => {
  return (
    <header className="feed-header">
      <div className="feed-header-left">
        <Avatar image={userAvatar} size="medium" />
        <div className="user-info feed">
          <strong>
            <Link to="#">{userName}</Link>
          </strong>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
