import React from 'react';
import styled from 'styled-components';
import { UiImageContainer, UiLoading } from '../../../../env/utils/access';

// content
import content from './staticContent';

// assets
import profilePicture from '../../../../assets/images/ProfilePicSmall.JPG';

const AboutStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 40rem), 1fr));
  grid-gap: var(--ui-grid-gap-1);
`;

const AboutImageContainerStyle = styled.div`
  grid-column: 1/2;
`;

const AboutDescriptionStyle = styled.header`
  display: grid;
  grid-template-rows: repeat(12, min-content);
  grid-gap: var(--ui-grid-gap-1);
`;

const AboutDescriptionHeaderStyle = styled.h1`
  grid-row: 1 / 3;

  ${(props) => props.theme.mixins.centerContent}
  text-align: center;

  padding: 1.8rem;
  border-radius: var(--ui-corners-1);

  color: var(--ui-main-color-1);
  border: 1px solid var(--ui-main-color-1);

  &::selection {
    color: var(--ui-general-color-2);
    background-color: var(--ui-main-color-1);
  }
`;

const AboutDescriptionBodyStyle = styled.p`
  grid-row: 3 / 9;

  ${(props) => props.theme.mixins.centerContent}

  flex-direction: column;
  text-align: center;

  padding: 1.8rem;
  border-radius: var(--ui-corners-1);

  font-family: var(--ui-header-font-1);
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.1rem;

  color: var(--ui-main-color-2);
  border: 1px solid var(--ui-main-color-2);

  &::selection {
    color: var(--ui-general-color-2);
    background-color: var(--ui-main-color-2);
  }
`;

const AboutDescriptionMotoStyle = styled.blockquote`
  grid-row: 9/13;

  ${(props) => props.theme.mixins.centerContent}
  text-align: center;

  padding: 1.8rem;
  border-radius: var(--ui-corners-1);

  font-family: var(--ui-header-font-1);
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.1rem;

  color: var(--ui-main-color-3);
  border: 1px solid var(--ui-main-color-3);

  &::selection {
    color: var(--ui-general-color-2);
    background-color: var(--ui-main-color-3);
  }

  &:after,
  &:before {
    font-size: 3.5rem;
    padding: 0.5rem;

    ${(props) => props.theme.media('43.75em')`
      font-size: 2.4rem
    `}
  }
  &:before {
    content: '\\201c';
    align-self: flex-start;
    transform: translateY(-1.8rem);

    ${(props) => props.theme.media('43.75em')`
      transform: translateY(-1.3rem);
    `}
  }
  &:after {
    content: '\\201d';
    align-self: flex-end;
    transform: translateY(2.8rem);

    ${(props) => props.theme.media('43.75em')`
      transform: translateY(2.3rem);
    `}
  }
`;

const About = (props) => {
  return (
    <AboutStyle>
      <AboutImageContainerStyle>
        <UiImageContainer
          src={profilePicture}
          alt="profile image"
          loading={<UiLoading delay="500" />}
        />
      </AboutImageContainerStyle>
      <AboutDescriptionStyle>
        <AboutDescriptionHeaderStyle>
          {content && content.header}
        </AboutDescriptionHeaderStyle>
        <AboutDescriptionBodyStyle>
          {content && content.about}
        </AboutDescriptionBodyStyle>
        <AboutDescriptionMotoStyle>
          {content && content.moto}
        </AboutDescriptionMotoStyle>
      </AboutDescriptionStyle>
    </AboutStyle>
  );
};

export default About;
