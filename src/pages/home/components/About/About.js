import React from 'react';

// components
import ProfileImage from '../ProfileImage/ProfileImage';

// content
import content from './staticContent';

// style
import {
  AboutStyle,
  AboutContainerStyle,
  AboutMeStyle,
  AboutMeContainerStyle,
  DescriptionStyle,
  MotoStyle,
  QuotesEndStyle,
  QuotesStartStyle,
} from './AboutStyle';

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
