import React from 'react';
import Avatar from 'Components/Avatar';
import defaultAvatar from 'assets/images/avatar-default.jpg';

function StoryItem(props) {
  const { userName, imageUrl, isNew } = props;
  return (
    <li className="story-item">
      <div className={`avatar-wrapper ${isNew && 'is-story-new'}`}>
        <Avatar
          className="is-story"
          image={imageUrl || defaultAvatar}
          size="large"
          username={userName}
        />
      </div>
      <span className="user-id"> {userName} </span>
    </li>
  );
}

export default StoryItem;
