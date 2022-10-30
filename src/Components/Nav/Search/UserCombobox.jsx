import Avatar from 'Components/Avatar';
import React from 'react';
import './UserCombobox.scss';

const UserCombobox = ({ show, users }) => {
  if (!show) return;

  return (
    <div className="combo-box">
      <ul className="combo-box-list">
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id} className="combo-box-item">
              <Avatar
                image={user?.avatar}
                username={user?.username}
                size="medium"
                className="combo-box-avatar"
              />
              <dl className="user-info">
                <dt className="user-id">{user?.username}</dt>
                <dd className="user-name">{user?.fullName}</dd>
              </dl>
            </li>
          ))
        ) : (
          <li className="combo-box-item">
            <p className="not-found-user">해당 유저를 찾을 수 없어요 🥲</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default UserCombobox;
