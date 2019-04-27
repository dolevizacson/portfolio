import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

const FooterStyle = styled(Flex).attrs({ full: true })`
  ${props => props.theme.color.white2}
  ${props => props.theme.BackgroundColor.black1}
`;

const Footer = () => {
  return <FooterStyle>footer</FooterStyle>;
};

export default Footer;
