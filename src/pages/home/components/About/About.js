import React from 'react';
import styled from 'styled-components';

// components
import ProfileImage from '../ProfileImage/ProfileImage';

// content
import content from './staticContent';

// style
const AboutStyle = styled.div`
  ${({ theme: { div } }) => div}

  padding-top: 10vh;
  padding-bottom: 5vh;

  ${({
    theme: {
      media: { phone },
    },
  }) => phone`
    padding: 2vh 0;
  `}
`;
const AboutContainerStyle = styled.div`
  ${({
    theme: {
      media: { tablet },
    },
  }) => tablet`flex-direction: column;`}
  ${({
    theme: {
      ui: { item },
    },
  }) => item}
`;

const AboutMeStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${({
    theme: {
      media: { tablet },
    },
  }) => tablet`width: 100%; height: 50%`}
  ${({
    theme: {
      color: { white2 },
    },
  }) => white2}
`;
const AboutMeContainerStyle = styled.div`
  ${({ theme: { div } }) => div}

  width: 90%;
  height: 90%;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;

  ${({
    theme: {
      media: { tablet },
    },
  }) => tablet`width: 95%;`}
`;

const DescriptionStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;
  text-align: center;

  ${({
    theme: {
      font: { font1 },
    },
  }) => font1}
`;

const MotoStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  justify-content: space-around;
  align-items: center;

  ${({
    theme: {
      font: { font2 },
    },
  }) => font2}
`;
const QuotesStartStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;
  height: 100%;

  ${({
    theme: {
      color: { red1 },
    },
  }) => red1}
`;
const QuotesEndStyle = styled.div`
  ${({ theme: { div } }) => div}

  font-size: 1.5rem;
  height: 100%;
  align-items: flex-end;

  ${({
    theme: {
      color: { red1 },
    },
  }) => red1}
`;

const About = () => {
  return (
    <AboutStyle>
      <AboutContainerStyle>
        <ProfileImage />
        <AboutMeStyle>
          <AboutMeContainerStyle>
            <DescriptionStyle>{content.about}</DescriptionStyle>
            <MotoStyle>
              <QuotesStartStyle>"</QuotesStartStyle>
              {content.moto}
              <QuotesEndStyle>"</QuotesEndStyle>
            </MotoStyle>
          </AboutMeContainerStyle>
        </AboutMeStyle>
      </AboutContainerStyle>
    </AboutStyle>
  );
};

export default About;
