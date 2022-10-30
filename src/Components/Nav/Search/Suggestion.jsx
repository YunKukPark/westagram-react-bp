import Avatar from 'Components/Avatar';
import React, { useRef } from 'react';
import './Suggestion.scss';

const Suggestion = ({ show, users, currentIndex }) => {
  const comboBoxRef = useRef();
  const isHighlighted = index => (currentIndex === index ? 'highlighted' : '');

  if (!show) return;

  return (
    <div className="combo-box" ref={comboBoxRef}>
      <ul className="combo-box-list">
        {users.length > 0 ? (
          users.map((user, i) => (
            <li key={user.id} className={`combo-box-item ${isHighlighted(i)}`}>
              <Avatar
                image={user.avatar}
                username={user.username}
                size="medium"
                className="combo-box-avatar"
              />
              <dl className="user-info">
                <dt className="user-id">{user.username}</dt>
                <dd className="user-name">{user.fullName}</dd>
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

export default Suggestion;
