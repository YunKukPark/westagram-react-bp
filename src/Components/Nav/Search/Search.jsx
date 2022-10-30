import useOutsideClick from 'hooks/useOutsideClick';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import UserCombobox from './UserCombobox';
import './Search.scss';

const Search = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const searchRef = useRef(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const openSearchBox = () => setIsSearchOpen(true);
  const closeSearchBox = () => setIsSearchOpen(false);

  const filteredUsers = users.filter(user => user.username.includes(query));

  const onChangeInput = ({ target }) => {
    setQuery(target.value);
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
        onChange={onChangeInput}
        onFocus={openSearchBox}
      />
      <UserCombobox show={isSearchOpen} users={filteredUsers} />
    </div>
  );
};

export default Search;
