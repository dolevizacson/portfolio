import React from 'react';
import styled from 'styled-components';
import Flex from 'styled-flex-component';

// components
import ProfileImage from '../ProfileImage/ProfileImage';

// content
import content from './staticContent';

// style
const AboutStyle = styled(Flex)`
  padding: 10vh 0;
`;
const AboutContainerStyle = styled(Flex)`
  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);

  ${props => props.theme.media.tablet`flex-direction: column`}
  ${props => props.theme.BackgroundColor.black1}
`;

const AboutMeStyle = styled(Flex).attrs({ column: true, justifyAround: true })`
  width: 50%;
  padding 2%;

  ${props => props.theme.media.tablet`width: 100%; padding: 0`}
  ${props => props.theme.color.white2}
`;
const DescriptionStyle = styled(Flex)`
  padding 0.625rem;
  font-size: 24px;
  text-align: center;

  ${props => props.theme.font.font1}
`;

const MotoStyle = styled(Flex).attrs({
  center: true,
})`
  padding 0.625rem;
  font-weight: bold;
  font-size: 24px;
  text-align: center;

  ${props => props.theme.font.font2}
`;
const QuotesStartStyle = styled(Flex)`
  font-size: 24px;
  height: 100%;

  ${props => props.theme.color.red1}
`;
const QuotesEndStyle = styled(Flex).attrs({ alignEnd: true })`
  font-size: 24px;
  height: 100%;

  ${props => props.theme.color.red1}
`;

const About = () => {
  return (
    <AboutStyle>
      <AboutContainerStyle>
        <ProfileImage />
        <AboutMeStyle>
          <DescriptionStyle>{content.about}</DescriptionStyle>
          <MotoStyle>
            <QuotesStartStyle>"</QuotesStartStyle>
            {content.moto}
            <QuotesEndStyle>"</QuotesEndStyle>
          </MotoStyle>
        </AboutMeStyle>
      </AboutContainerStyle>
    </AboutStyle>
  );
};

export default About;
