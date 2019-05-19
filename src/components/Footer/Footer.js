import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  ${({ theme }) => theme.div}
  ${({ theme }) => theme.color.white2}
  ${({ theme }) => theme.BackgroundColor.black1}
  width: 100%;
`;

const Footer = () => {
  return <FooterStyle>footer</FooterStyle>;
};

export default Footer;
