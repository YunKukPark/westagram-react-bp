import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function DropdownMenu(props) {
  const { myMenuButton, hideDropdown } = props;

  useEffect(() => {
    const listener = event => {
      if (myMenuButton.current.contains(event.target)) return;
      hideDropdown();
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, []);

  return (
    <>
      <div className="my-menu-layer" />
      <div className="my-menu-content">
        <ul className="my-menu-list">
          <li className="my-menu-item">
            <i className="far fa-user-circle" />
            <Link to="#">프로필</Link>
          </li>
          <li className="my-menu-item">
            <i className="far fa-bookmark" />
            <Link to="#">저장됨</Link>
          </li>
          <li className="my-menu-item">
            <i className="fas fa-cog" />
            <Link to="#">설정</Link>
          </li>
          <li className="my-menu-item">
            <button type="button">로그아웃</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropdownMenu;
