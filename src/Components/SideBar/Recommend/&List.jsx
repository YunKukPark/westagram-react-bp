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

// TODO: 안애 내용 수정, MOCK 데이터로 관리
const RECOMMENDATIONS = [
  {
    key: 0,
    avatarImage: './mock/images/recommend/01.jpg',
    userName: 'console_table',
    recommendState: 'Instagram에 새로 가입했습니다',
  },
  {
    key: 1,
    avatarImage: './mock/images/recommend/02.jpg',
    userName: 'console_log',
    recommendState: '김개발',
  },
  {
    key: 2,
    avatarImage: './mock/images/recommend/03.jpg',
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
