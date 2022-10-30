import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg';
import Avatar from 'Components/Avatar';
import useOutsideClick from 'hooks/useOutsideClick';
import { cn, cond } from 'lib/utils/styles';
import DropdownMenu from './Dropdown';
import './Nav.scss';
import Search from './Search/Search';

const Nav = () => {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const myMenuButton = useRef();
  const hideDropdown = () => setIsShowDropdown(false);
  const handleClickAvatarButton = () => setIsShowDropdown(!isShowDropdown);

  useOutsideClick(myMenuButton, hideDropdown);

  return (
    <nav className="global-nav-bar">
      <div className="global-nav-wrapper">
        <Link to="#">
          <h1 className="logo">Westagram</h1>
        </Link>
        <Search />
        <div className="user-action-group">
          <div className="user-action-item">
            <i className="far fa-compass" />
          </div>
          <div className="user-action-item is-new">
            <i className="far fa-heart" />
          </div>

          <div className="user-action-item my-menu" ref={myMenuButton}>
            <Avatar
              className={cn(
                'dropdown-button',
                cond(isShowDropdown, 'is-active')
              )}
              image={avatar}
              size="small"
              onClick={handleClickAvatarButton}
            />
            <DropdownMenu show={isShowDropdown} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
