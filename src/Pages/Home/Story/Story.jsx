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
    imageUrl: 'https://i.pravatar.cc/300?img=15',
    isNew: true,
  },
  {
    key: 2,
    userName: 'hyuckisse2000',
    imageUrl: 'https://i.pravatar.cc/300?img=16',
    isNew: true,
  },
  {
    key: 3,
    userName: 'longlonglonglonglong',
    imageUrl: 'https://i.pravatar.cc/300?img=17',
    isNew: true,
  },
  {
    key: 4,
    userName: '2onick32',
    imageUrl: 'https://i.pravatar.cc/300?img=18',
    isNew: true,
  },
  {
    key: 5,
    userName: '10f_kz_art_museum',
    imageUrl: 'https://i.pravatar.cc/300?img=19',
    isNew: false,
  },
  {
    key: 6,
    userName: 'ctrsoundsidn',
    imageUrl: 'https://i.pravatar.cc/300?img=20',
    isNew: false,
  },
  {
    key: 7,
    userName: 'dlwlrma',
    imageUrl: 'https://i.pravatar.cc/300?img=21',
    isNew: false,
  },
  {
    key: 8,
    userName: 'knock_out',
    imageUrl: 'https://i.pravatar.cc/300?img=22',
    isNew: false,
  },
];
