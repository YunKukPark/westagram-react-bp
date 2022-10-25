import React from 'react';
import StoryItem from './StoryItem';
import './Story.scss';

const Story = () => {
  return (
    <div className="story-wrapper">
      <ul className="story-list">
        {STORY_ITEMS.map(storyItem => {
          const { key, ...otherProps } = storyItem;
          return <StoryItem key={key} {...otherProps} />;
        })}
      </ul>
    </div>
  );
};

export default Story;

const STORY_ITEMS = [
  {
    key: 1,
    userName: 'poclanos',
    imageUrl: './mock/images/story/01.jpg',
    isNew: true,
  },
  {
    key: 2,
    userName: 'hyucki2000',
    imageUrl: './mock/images/story/02.jpg',
    isNew: true,
  },
  {
    key: 3,
    userName: 'longlonglonglonglong',
    imageUrl: './mock/images/story/03.jpg',
    isNew: true,
  },
  {
    key: 4,
    userName: '2onic',
    imageUrl: './mock/images/story/04.jpg',
    isNew: true,
  },
  {
    key: 5,
    userName: '2f_art_museum',
    imageUrl: './mock/images/story/05.jpg',
    isNew: false,
  },
  {
    key: 6,
    userName: 'ctrsound',
    imageUrl: './mock/images/story/06.jpg',
    isNew: false,
  },
  {
    key: 7,
    userName: 'dlwlrma',
    imageUrl: './mock/images/story/07.jpg',
    isNew: false,
  },
  {
    key: 8,
    userName: 'knock_out',
    imageUrl: '',
    isNew: false,
  },
];
