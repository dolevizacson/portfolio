import React from 'react';
import styled from 'styled-components';

// components
import ProfileImage from '../ProfileImage/ProfileImage';

// content
import content from './staticContent';

// style
const AboutStyle = styled.div`
  ${({ theme }) => theme.div}

  padding-top: 10vh;
  padding-bottom: 5vh;

  ${({ theme }) => theme.media.phone`
    padding: 2vh 0;
  `}
`;
const AboutContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  border-radius: 10px;
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);

  ${({ theme }) => theme.media.tablet`flex-direction: column;`}
  ${({ theme }) => theme.BackgroundColor.black1}
`;

const AboutMeStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.media.tablet`width: 100%; height: 50%`}
  ${({ theme }) => theme.color.white2}
`;
const AboutMeContainerStyle = styled.div`
  ${({ theme }) => theme.div}

  width: 90%;
  height: 90%;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;

  ${({ theme }) => theme.media.tablet`width: 95%;`}
`;

const DescriptionStyle = styled.div`
  ${({ theme }) => theme.div}

  font-size: 1.5rem;
  text-align: center;

  ${({ theme }) => theme.font.font1}
`;

const MotoStyle = styled.div`
  ${({ theme }) => theme.div}

  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  justify-content: space-around;
  align-items: center;

  ${({ theme }) => theme.font.font2}
`;
const QuotesStartStyle = styled.div`
  ${({ theme }) => theme.div}

  font-size: 1.5rem;
  height: 100%;

  ${({ theme }) => theme.color.red1}
`;
const QuotesEndStyle = styled.div`
  ${({ theme }) => theme.div}

  font-size: 1.5rem;
  height: 100%;
  align-items: flex-end;

  ${({ theme }) => theme.color.red1}
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
