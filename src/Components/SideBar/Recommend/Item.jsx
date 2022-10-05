import React from 'react';
import { Link } from 'react-router-dom';

const RecommendItem = props => {
  const { avatarImage, userName, recommendState } = props;

  return (
    <li className="recommendation-item">
      <div className="avatar avatar-32">
        <Link to="#">
          <img src={avatarImage} alt={`${userName}의 아바타`} />
        </Link>
      </div>
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
