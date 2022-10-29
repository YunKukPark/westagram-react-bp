import React, { useState } from 'react';
import { useCallback } from 'react';

const CommentInput = props => {
  const { comments, handleComment } = props;
  const [userComment, setNewUserComment] = useState('');
  const [buttonSwitch, setButtonSwitch] = useState(true);

  const handleInput = e => {
    const inputValue = e.target.value;
    setNewUserComment(inputValue);
    inputValue ? setButtonSwitch(false) : setButtonSwitch(true);
  };

  const onSubmit = useCallback(
    e => {
      if (!userComment) return;

      const newComment = {
        id: comments.length + 1,
        userName: 'hello._.',
        content: userComment,
      };
      handleComment.add(newComment);

      clearInput();
    },
    [userComment, handleComment, comments.length]
  );

  const onKeyDownEnter = useCallback(
    ({ code }) => {
      if (code === 'Enter') onSubmit();
    },
    [onSubmit]
  );

  const clearInput = () => {
    setNewUserComment('');
    setButtonSwitch(true);
  };

  return (
    <section className="comment-wrapper">
      <button type="button">
        <i className="far fa-smile" />
      </button>
      <input
        value={userComment}
        name="comment"
        type="text"
        placeholder="댓글 달기..."
        onChange={handleInput}
        onKeyDown={onKeyDownEnter}
      />
      <button
        className="comment-submit-button button-primary"
        disabled={buttonSwitch}
        onClick={onSubmit}
      >
        게시
      </button>
    </section>
  );
};

export default CommentInput;
