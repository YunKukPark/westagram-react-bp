import React, { memo, useState, useEffect } from 'react';
import FeedFooter from '../Comment/FeedFooter';
import './Feed.scss';
import Header from '../Header/Header';

const Feed = ({ feed }) => {
  const { feedId, userName, userAvatar, feedImg, content, likeHit } = feed;
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [like, setLike] = useState(false);

  const toggleLike = () => setLike(prev => !prev);

  const likeInfo = {
    hit: like ? likeHit + 1 : likeHit,
    class: `fa-heart ${like ? 'fas is-liked' : 'far'} `,
    animate: like && 'like-animation',
  };

  // TODO: useReducer로 수정
  const handleComment = {
    add(comment) {
      setComments([comment, ...comments]);
    },
    delete({ id }) {
      setComments(comments.filter(comment => id !== comment.id));
    },
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${feedId}/comments`
      );
      const data = await res.json();
      setComments(data);
      setIsLoading(false);
    })();
  }, [feedId]);

  return (
    <div className="feed-wrapper">
      <Header userAvatar={userAvatar} userName={userName} />
      <section className="feed-main">
        <div className="feed-image-wrapper" onDoubleClick={toggleLike}>
          <i className={`${likeInfo.class} ${likeInfo.animate}`} />
          <img src={feedImg} alt="피드이미지" />
        </div>
      </section>
      <section className="feed-bottom">
        <section className="feed-controller">
          <div className="icon-group left">
            <div className="icon-item">
              <i className={likeInfo.class} onClick={toggleLike} />
            </div>
            <div className="icon-item">
              <i className="far fa-comment" />
            </div>
            <div className="icon-item">
              <i className="far fa-paper-plane" />
            </div>
          </div>
          <div className="right">
            <div className="icon-item">
              <i className="far fa-bookmark" />
            </div>
          </div>
        </section>
        <div className="feed-bottom-info">
          <div className="feed-like">
            <dl>
              <dt>좋아요</dt>
              <dd>
                <span className="like-hit">{likeInfo.hit}</span>개
              </dd>
            </dl>
          </div>
          {!isLoading && (
            <FeedFooter
              userName={userName}
              content={content}
              comments={comments}
              handleComment={handleComment}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default memo(Feed);
