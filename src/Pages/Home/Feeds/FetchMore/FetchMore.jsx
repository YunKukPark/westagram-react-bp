import React, { useEffect, useRef } from 'react';
import './FetchMore.scss';

const FetchMore = ({ loading, page, setPage, limit }) => {
  const trigger = useRef(null);
  const observer = new IntersectionObserver(([{ isIntersecting }]) => {
    if (isIntersecting) setPage(prev => prev + 1);
  });

  useEffect(() => {
    observer.observe(trigger.current);

    return () => observer.disconnect();
  }, []);

  return (
    // Loading Spinner
    <div className={`lds-ring ${loading ? 'loading' : ''}`} ref={trigger}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default FetchMore;
