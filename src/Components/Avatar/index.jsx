import React from 'react';
import defaultAvatar from 'assets/images/avatar-default.jpg';
import { Link } from 'react-router-dom';
import './Avatar.scss';

const Avatar = props => {
  const {
    username,
    className,
    image = defaultAvatar,
    size = 'small',
    to,
    onClick,
  } = props;

  const alt = `${username} 님의 프로필 사진`;

  if (to != null) {
    return (
      <Link className={`avatar ${size} ${className}`} to={to}>
        <img src={image} alt={alt} />
      </Link>
    );
  }

  return (
    <div className={`avatar ${size} ${className}`} onClick={onClick}>
      <img src={image} alt={alt} />
    </div>
  );
};

export default Avatar;
