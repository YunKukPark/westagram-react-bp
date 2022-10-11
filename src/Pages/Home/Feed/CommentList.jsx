import React, { useState } from 'react';

const CommentList = props => {
  const { onDeleteButtonClick, comment } = props;
  const { userName, content } = comment;
  const [isCommentLike, setIsCommentLike] = useState(false);

  return (
    <li className="feed-comment-item">
      <dl className="feed-desc feed-comment">
        <dt className="feed-comment user-id">{userName}</dt>
        <dd className="feed-comment feed-content">{content}</dd>
      </dl>
      <div>
        <button type="button" onClick={() => setIsCommentLike(!isCommentLike)}>
          <i className={`fa-heart ${isCommentLike ? 'fas is-liked' : 'far'}`} />
        </button>
        <button type="button" onClick={() => onDeleteButtonClick(comment)}>
          <i className="fas fa-times" />
        </button>
      </div>
    </li>
  );
};

export default CommentList;
