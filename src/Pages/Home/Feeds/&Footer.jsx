import React, { useState } from 'react';
import CommentList from './CommentList';

const FeedFooter = props => {
  const { userName, content, comments, onDeleteButtonClick } = props;
  const [isListOpen, setIsListOpen] = useState(false);

  return (
    <div className="feed-desc-group">
      <dl className="feed-desc">
        <dt className="user-id">{userName}</dt>
        <dd className="feed-content">{content}</dd>
      </dl>
      <ul className="feed-comment-list">
        {comments.map((comment, idx) => {
          return isListOpen ? (
            <CommentList
              key={comment.id}
              comment={comment}
              onDeleteButtonClick={onDeleteButtonClick}
            />
          ) : (
            idx <= 2 && (
              <CommentList
                key={comment.id}
                comment={comment}
                onDeleteButtonClick={onDeleteButtonClick}
              />
            )
          );
        })}
      </ul>
      {comments.length > 3 && (
        <p
          className="comment-more"
          onClick={() => {
            setIsListOpen(!isListOpen);
          }}
        >
          {isListOpen ? `간략히` : `댓글 ${comments.length}개 모두 보기`}
        </p>
      )}
      <p className="feed-uploaded">4시간 전</p>
    </div>
  );
};

export default FeedFooter;
