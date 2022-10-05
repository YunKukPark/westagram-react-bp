import React from 'react';
import FooterList from './FooterItem';

const Footer = () => {
  return (
    <footer className="global-footer">
      <ul className="global-footer-list">
        {FOOTER_LIST.map(footerItem => (
          <FooterList key={footerItem.id} {...footerItem} />
        ))}
      </ul>

      <span className="copyright">© 2021 Instagram from Meta</span>
    </footer>
  );
};

export default Footer;

const FOOTER_LIST = [
  {
    id: 1,
    content: '소개',
    linkUrl: 'https://about.instagram.com',
  },
  {
    id: 2,
    content: '도움말',
    linkUrl: 'https://help.instagram.com/',
  },
  {
    id: 3,
    content: '홍보 센터',
    linkUrl: 'https://about.instagram.com/blog',
  },
  {
    id: 4,
    content: 'API',
    linkUrl: 'https://developers.facebook.com/docs/instagram',
  },
  {
    id: 5,
    content: '개인정보처리방침',
    linkUrl: 'https://help.instagram.com/519522125107875',
  },
];
