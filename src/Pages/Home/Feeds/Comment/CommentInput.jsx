import React, { useRef, useState } from 'react';

const CommentInput = props => {
  const { comments, handleComment } = props;
  const [userComment, setNewUserComment] = useState('');
  const [buttonSwitch, setButtonSwitch] = useState(true);

  const commentLength = comments.length;

  const handleInput = e => {
    if (e.code === 'Enter') onClickSubmitBtn();
    const inputValue = e.target.value;
    setNewUserComment(inputValue);
    inputValue ? setButtonSwitch(false) : setButtonSwitch(true);
  };

  const onClickSubmitBtn = () => {
    if (!userComment) return;

    const newComment = {
      id: commentLength + 1,
      userName: 'hello._.',
      content: userComment,
    };
    handleComment.add(newComment);

    setInputInit();
  };

  const setInputInit = () => {
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
      />
      <button
        className="comment-submit-button button-primary"
        disabled={buttonSwitch}
        onClick={onClickSubmitBtn}
      >
        게시
      </button>
    </section>
  );
};

export default CommentInput;
