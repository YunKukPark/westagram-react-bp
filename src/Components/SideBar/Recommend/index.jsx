import React from 'react';
import { Link } from 'react-router-dom';
import RecommendItem from './Item';

const RecommendList = () => {
  return (
    <section className="recommendation">
      <header className="recommendation-title">
        <h3>회원님을 위한 추천</h3>
        <Link to="#">모두 보기</Link>
      </header>
      <ul className="recommendation-list">
        {RECOMMENDATIONS.map(recommendation => {
          const { key, ...otherprops } = recommendation;
          return <RecommendItem key={key} {...otherprops} />;
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
    avatarImage: './assets/yunkuk/image/recommend01.jpg',
    userName: 'suuuuul.p',
    recommendState: 'Instagram에 새로 가입했습니다',
  },
  {
    key: 1,
    avatarImage: './assets/yunkuk/image/recommend02.jpg',
    userName: 'h_sejin_',
    recommendState: '홍세진',
  },
  {
    key: 2,
    avatarImage: './assets/yunkuk/image/recommend03.jpg',
    userName: 'caffein4ddicted',
    recommendState: 'april__o6님 외 12명이 팔로우합니다',
  },
  {
    key: 3,
    avatarImage: './assets/yunkuk/image/avatar-default.jpg',
    userName: '_terryyomi',
    recommendState: 'king_sejong님 외 3명이 팔로우합니다',
  },
  {
    key: 4,
    avatarImage: './assets/yunkuk/image/avatar-default.jpg',
    userName: 'kkrubbingbbong',
    recommendState:
      '굉장히많은글자수가 팔로우를 하는데 넘어가는거는 일랩시스처리합니다',
  },
];
