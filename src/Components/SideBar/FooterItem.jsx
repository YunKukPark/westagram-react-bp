import React from 'react';

const FooterList = props => {
  const { content, linkUrl } = props;
  return (
    <li className="global-footer-item">
      <a target="blank" href={linkUrl}>
        {content}
      </a>
    </li>
  );
};

export default FooterList;
