import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CommentInput from './CommentInput';
import FeedFooter from './&Footer';
import Avatar from 'Components/Avatar';
import './Feeds.scss';

const Feed = props => {
  const { userName, userAvatar, feedImg, content, likeHit, comments } = props;
  const [likeInfo, setLikeInfo] = useState({
    hit: likeHit,
    class: 'far fa-heart',
    animate: '',
  });
  const [like, setLike] = useState(false);
  const [feedComments, setFeedComments] = useState(comments);

  const handleLikeClick = () => {
    setLike(!like);
    updateLikeHit();
  };

  const updateLikeHit = () => {
    const likeHit = like ? likeInfo.hit - 1 : likeInfo.hit + 1;
    const likeClass = `fa-heart ${like ? 'far' : 'fas is-liked'} `;
    const likeAnimate = like ? '' : 'like-animation';

    setLikeInfo({
      hit: likeHit,
      class: likeClass,
      animate: likeAnimate,
    });
  };

  const addNewComment = newComment => {
    setFeedComments([newComment, ...feedComments]);
  };

  const deleteComment = comment => {
    const comments = [...feedComments].filter(
      feedComment => feedComment.id !== comment.id
    );
    setFeedComments(comments);
  };

  return (
    <div className="feed-wrapper">
      <header className="feed-header">
        <div className="feed-header-left">
          <Avatar image={userAvatar} size="medium" />
          <div className="user-info feed">
            <strong>
              <Link to="#">{userName}</Link>
            </strong>
          </div>
        </div>
      </header>
      <section className="feed-main">
        <div className="feed-image-wrapper" onDoubleClick={handleLikeClick}>
          <i className={`${likeInfo.class} ${likeInfo.animate}`} />
          <img src={feedImg} alt="피드이미지" />
        </div>
      </section>
      <section className="feed-bottom">
        <section className="feed-controller">
          <div className="icon-group left">
            <div className="icon-item">
              <i className={likeInfo.class} onClick={handleLikeClick} />
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
          <FeedFooter
            userName={userName}
            content={content}
            comments={feedComments}
            onDeleteButtonClick={deleteComment}
          />
        </div>
      </section>
      <CommentInput
        onButtonClick={addNewComment}
        feedComments={feedComments} // 구체적인 형태로 내려주기보단 comment 로 내려주는게 좋다
      />
    </div>
  );
};

export default Feed;
