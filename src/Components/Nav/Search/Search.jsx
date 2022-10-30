import useOutsideClick from 'hooks/useOutsideClick';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import Suggestion from './Suggestion';
import './Search.scss';

const NAVIGATION_KEY = ['ArrowUp', 'ArrowDown'];

const Search = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const searchRef = useRef(null);
  const userListRef = useRef([]);

  const filteredUsers = users.filter(user => user.username.includes(query));

  const openSearchBox = () => setIsSearchOpen(true);
  const closeSearchBox = () => setIsSearchOpen(false);

  const onChangeSearchInput = ({ target }) => {
    setQuery(target.value);
    setCurrentIndex(0);
  };

  const onKeyDownSearchInput = ({ key }) => {
    if (!NAVIGATION_KEY.includes(key)) return;
    if (key === 'ArrowUp') {
      setCurrentIndex(prev => (prev === 0 ? prev : prev - 1));
      userListRef.current[currentIndex].scrollIntoView({
        block: 'end',
        behavior: 'smooth',
      });
    }

    if (key === 'ArrowDown') {
      setCurrentIndex(prev =>
        prev === filteredUsers.length - 1 ? prev : prev + 1
      );
      userListRef.current[currentIndex].scrollIntoView({
        block: 'start',
        behavior: 'smooth',
      });
    }
  };

  useOutsideClick(searchRef, closeSearchBox);

  /**
   * query가 바뀔 때 debounce후 query param에 반영해야 하나
   * Mock data 사용 중 이므로, 전체 데이터를 불러오는 것으로 대체
   * debounce fetching 참고: src/hooks/useDebounce.js
   */
  useEffect(() => {
    (async () => {
      const res = await fetch('/mock/response/user.json');
      const data = await res.json();
      setUsers(data);
    })();
  }, []);

  return (
    <div className="search-input-wrapper" ref={searchRef}>
      <input
        value={query}
        type="text"
        placeholder="검색"
        onChange={onChangeSearchInput}
        onKeyDown={onKeyDownSearchInput}
        onFocus={openSearchBox}
        onBlur={() => setCurrentIndex(0)}
      />
      <Suggestion
        show={isSearchOpen}
        users={filteredUsers}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        ref={userListRef}
      />
    </div>
  );
};

export default Search;
