import React from 'react';
import styled from 'styled-components';

const AppLogoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0.5rem;

  height: 3rem;
  width: 6rem;

  --letters-color: var(--ui-main-color-1);
  --background-color: var(--ui-general-color-1);
  --dot-color: var(--ui-main-color-1);
`;

const AppLogoContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3px;

  height: 3rem;
  width: 6rem;

  background-color: transparent;
`;

const AppLogoFirstLetterStyle = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const AppLogoFirstLetter1Style = styled.div`
  position: absolute;

  width: 100%;
  height: 100%;

  border-radius: 50%;
  background-color: var(--letters-color);

  z-index: 10;
`;

const AppLogoFirstLetter2Style = styled.div`
  position: absolute;
  left: 0;

  height: 100%;
  width: 50%;

  background-color: var(--letters-color);
`;

const AppLogoFirstLetter21Style = styled.div`
  position: absolute;
  top: calc(100% / 3);
  right: calc(100% / 2.5);

  width: calc(100% / 3);
  height: calc(100% / 3);

  border-radius: 50%;
  background-color: var(--background-color);
`;

const AppLogoFirstLetter22Style = styled.div`
  position: absolute;
  top: calc(100% / 3);
  right: calc(100% / 2.5);

  width: calc((100% / 3) / 2);
  height: calc(100% / 3);

  background-color: var(--background-color);
`;

const AppLogoSecondLetterStyle = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
`;

const AppLogoSecondLetter1Style = styled.div`
  position: absolute;
  top: 0;
  right: calc(100% / 3);

  width: calc(100% / 3);
  height: calc(100% / 3);

  border-radius: 50%;
  background-color: var(--dot-color);
`;

const AppLogoSecondLetter2Style = styled.div`
  position: absolute;
  top: calc(100% / 3);
  right: 0;

  height: calc((100% / 3) * 2);
  width: 100%;

  background-color: var(--letters-color);
`;

const AppLogoSecondLetter21Style = styled.div`
  position: absolute;
  top: 0;
  right: calc(100% / 3);

  width: calc(100% / 3);
  height: 100%;

  background-color: var(--ui-general-color-1);
`;

const AppLogo = (props) => {
  return (
    <AppLogoStyle>
      <AppLogoContainerStyle>
        <AppLogoFirstLetterStyle>
          <AppLogoFirstLetter1Style>
            <AppLogoFirstLetter21Style></AppLogoFirstLetter21Style>
            <AppLogoFirstLetter22Style></AppLogoFirstLetter22Style>
          </AppLogoFirstLetter1Style>
          <AppLogoFirstLetter2Style></AppLogoFirstLetter2Style>
        </AppLogoFirstLetterStyle>
        <AppLogoSecondLetterStyle>
          <AppLogoSecondLetter1Style></AppLogoSecondLetter1Style>
          <AppLogoSecondLetter2Style>
            <AppLogoSecondLetter21Style></AppLogoSecondLetter21Style>
          </AppLogoSecondLetter2Style>
        </AppLogoSecondLetterStyle>
      </AppLogoContainerStyle>
    </AppLogoStyle>
  );
};

export default AppLogo;
