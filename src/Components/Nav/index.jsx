import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import DropdownMenu from './DropdownMenu';
import './Nav.scss';

const Nav = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const myMenuButton = useRef();
  const hideDropdown = () => setIsShowDropdown(false);

  const handleClickAvatarButton = () => setIsShowDropdown(!isShowDropdown);

  return (
    <nav className="global-nav-bar">
      <div className="global-nav-wrapper">
        <Link to="#">
          <h1 className="logo">Westagram</h1>
        </Link>
        <div className="search-input-wrapper">
          <i className="ic-search" />
          <input type="text" placeholder="검색" />
        </div>
        <div className="user-action-group">
          <div className="user-action-item">
            <i className="far fa-compass" />
          </div>
          <div className="user-action-item is-new">
            <i className="far fa-heart" />
          </div>

          <div className="user-action-item my-menu" ref={myMenuButton}>
            <button
              onClick={handleClickAvatarButton}
              type="button"
              className={`dropdown-button avatar avatar-26 ${
                isShowDropdown && 'is-active'
              }`}
            >
              <img src={avatar} alt="유저아바타" />
            </button>
            {isShowDropdown && (
              <DropdownMenu
                myMenuButton={myMenuButton}
                hideDropdown={hideDropdown}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;