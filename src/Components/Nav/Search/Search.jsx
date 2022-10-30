import React, { useState } from 'react';
import { useEffect } from 'react';
import Combobox from './Combobox';
import './Search.scss';

const Search = () => {
  const [query, setQuery] = useState('');
  const isSearchOpen = query.length > 0;

  const onChangeInput = ({ target }) => {
    setQuery(target.value);
  };

  /**
   * query가 바뀔 때 debounce후 query param에 반영해야 하나
   * Mock data 사용 중 이므로, 전체 데이터를 불러오는 것으로 대체
   * debounce fetching 참고: src/hooks/useDebounce.js
   */
  useEffect(() => {
    (async () => {
      const res = await fetch('/mock/response/user.json');
      const data = await res.json();
      console.log(data);
    })();
  }, []);

  return (
    <div className="search-input-wrapper">
      <input
        value={query}
        type="text"
        placeholder="검색"
        onChange={onChangeInput}
      />
      <Combobox />
    </div>
  );
};

export default Search;
