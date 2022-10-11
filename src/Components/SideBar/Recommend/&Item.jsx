import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'Components/Avatar';
import defaultAvatar from 'assets/images/avatar-default.jpg';

const RecommendItem = props => {
  const { avatarImage, userName, recommendState } = props;

  return (
    <li className="recommendation-item">
      <Avatar size="medium" image={avatarImage || defaultAvatar} />
      <div className="user-info">
        <strong>
          <Link to="#">{userName}</Link>
        </strong>
        <span>{recommendState}</span>
      </div>
      <button className="button-primary" type="button">
        팔로우
      </button>
    </li>
  );
};

export default RecommendItem;
