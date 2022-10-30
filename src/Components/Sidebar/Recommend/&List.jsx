import React from 'react';
import { Link } from 'react-router-dom';
import RecommendItem from './&Item';

const RecommendList = () => {
  return (
    <section className="recommendation">
      <header className="recommendation-title">
        <h3>회원님을 위한 추천</h3>
        <Link to="#">모두 보기</Link>
      </header>
      <ul className="recommendation-list">
        {RECOMMENDATIONS.map(recommendation => {
          const { key, ...others } = recommendation;
          return <RecommendItem key={key} {...others} />;
        })}
      </ul>
    </section>
  );
};

export default RecommendList;

const RECOMMENDATIONS = [
  {
    key: 0,
    avatarImage: 'https://i.pravatar.cc/300?img=55',
    userName: 'console_table',
    recommendState: 'Instagram에 새로 가입했습니다',
  },
  {
    key: 1,
    avatarImage: 'https://i.pravatar.cc/300?img=45',
    userName: 'console_log',
    recommendState: '김개발',
  },
  {
    key: 2,
    avatarImage: 'https://i.pravatar.cc/300?img=35',
    userName: 'hello_world',
    recommendState: 'wecode_bootcamp님 외 12명이 팔로우합니다',
  },
  {
    key: 3,
    avatarImage: '',
    userName: '_gracefulrain',
    recommendState: 'wecode_bootcamp님 외 3명이 팔로우합니다',
  },
  {
    key: 4,
    avatarImage: '',
    userName: 'unknown',
    recommendState:
      '굉장히많은글자수가 팔로우를 하는데 넘어가는거는 일랩시스처리합니다',
  },
];
