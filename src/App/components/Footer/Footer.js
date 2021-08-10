import React from 'react';
import styled from 'styled-components';

// icons
import {
  Github,
  LinkedinSquare,
  FacebookSquare,
} from 'styled-icons/boxicons-logos';

const linkList = [
  {
    Icon: FacebookSquare,
    url: 'https://www.facebook.com/dolev.izacson',
  },
  {
    Icon: LinkedinSquare,
    url: 'https://www.linkedin.com/in/dolev-izacsson-084087109/',
  },
  {
    Icon: Github,
    url: 'https://github.com/dolevizacson',
  },
];

// style
const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  height: var(--navbar-height);

  padding: 0 1rem;
  border-top: 1px solid var(--ui-general-color-2);

  ${(props) => props.theme.media('19.6875em')`
    height: calc(var(--navbar-height) * 2);
    flex-direction: column;
    justify-content: space-evenly;
  `}
`;

const FooterLinksListStyle = styled.ul`
  display: grid;
  grid-auto-flow: column;
  grid-gap: var(--ui-grid-gap-4);
  justify-items: center;
  align-items: center;

  margin: auto 0;
  margin-right: auto;

  ${(props) => props.theme.media('19.6875em')`
    margin: 0 auto;
  `}
`;

const FooterLinkStyle = styled.a`
  width: 3.5rem;
  height: 3.5rem;

  color: var(--ui-general-color-2);
  cursor: pointer;

  box-sizing: content-box;
  padding: 2px;

  &:focus-visible {
    outline: none;
    padding: 0;
    border: 2px solid var(--ui-main-color-1);
    border-radius: 4px;
    box-sizing: content-box;
  }

  &:hover {
    color: var(--ui-main-color-1);
  }
`;

const FooterTextStyle = styled.p`
  font-family: var(--ui-header-font-1);
  font-size: 1.7rem;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1rem;

  margin-right: 1rem;
`;

const FooterTextNameStyle = styled.span``;

const Footer = () => {
  const renderLinkList = (linkList) => {
    return linkList.map((Link) => {
      return (
        <FooterLinkStyle
          key={Link.url}
          href={Link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link.Icon />
        </FooterLinkStyle>
      );
    });
  };

  return (
    <FooterStyle>
      <FooterLinksListStyle>{renderLinkList(linkList)}</FooterLinksListStyle>
      <FooterTextStyle>
        made by <FooterTextNameStyle>dolev izacson</FooterTextNameStyle>
      </FooterTextStyle>
    </FooterStyle>
  );
};

export default Footer;
