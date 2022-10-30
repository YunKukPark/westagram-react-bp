import React from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.scss';

function DropdownMenu({ show }) {
  if (!show) return;
  return (
    <div className="dropdown">
      <div className="dropdown-layer" />
      <div className="dropdown-content">
        <ul className="dropdown-list">
          <li className="dropdown-item">
            <i className="far fa-user-circle" />
            <Link to="#">프로필</Link>
          </li>
          <li className="dropdown-item">
            <i className="far fa-bookmark" />
            <Link to="#">저장됨</Link>
          </li>
          <li className="dropdown-item">
            <i className="fas fa-cog" />
            <Link to="#">설정</Link>
          </li>
          <li className="dropdown-item">
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
