import React, { useRef, useState } from 'react';

const CommentInput = props => {
  const { onButtonClick, feedComments } = props;
  const [newCommentContent, setNewCommentContent] = useState('');
  const [buttonSwitch, setButtonSwitch] = useState(true);
  const inputRef = useRef();

  const commentLength = feedComments.length;

  const onTextChange = e => {
    const inputValue = e.target.value;
    setNewCommentContent(inputValue);
    inputValue ? setButtonSwitch(false) : setButtonSwitch(true);
  };

  const onClickSubmit = () => {
    if (!newCommentContent) return;

    const newComment = {
      id: commentLength + 1,
      userName: 'hello._.',
      content: newCommentContent,
    };

    onButtonClick(newComment);
    setInputInit();
  };

  const setInputInit = () => {
    inputRef.current.value = '';
    setNewCommentContent('');
    setButtonSwitch(true);
  };

  return (
    <section className="comment-wrapper">
      <button type="button">
        <i className="far fa-smile" />
      </button>
      <input
        name="comment"
        type="text"
        placeholder="댓글 달기..."
        onChange={e => onTextChange(e)}
        onKeyPress={e => {
          if (e.code === 'Enter') onClickSubmit();
        }}
        ref={inputRef}
      />
      <button
        className="comment-submit-button button-primary"
        disabled={buttonSwitch}
        onClick={onClickSubmit}
      >
        게시
      </button>
    </section>
  );
};

export default CommentInput;
