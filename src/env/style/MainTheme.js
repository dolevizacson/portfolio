import React from 'react';
import { css, ThemeProvider } from 'styled-components';

// theme style options
const screenSizes = {
  wideDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const mainAppThemeColors = {
  red1: '#c3073f',
  white1: 'white',
  white2: '#d2caca',
  white3: '#cfcfcf',
  black1: '#1a1a1d',
  grey1: '#313331',
};

const mainAppThemeFonts = {
  font1: 'Courier New',
  font2: 'myFont1-regular',
};

// theme methods
const createMediaqueries = sizes => {
  return Object.keys(sizes).reduce((sizesArray, size) => {
    sizesArray[size] = (...args) => css`
      @media (max-width: ${sizes[size] / 16}em) {
        ${css(...args)}
      }
    `;
    return sizesArray;
  }, {});
};

const createsCss = (name, options) => {
  return Object.keys(options).reduce((optionsArray, option) => {
    optionsArray[option] = css`
      ${name} : ${options[option]};
    `;
    return optionsArray;
  }, {});
};

// theme element specific style
const div = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: stretch;
`;

const corners = css`
  border-radius: 10px;
`;

const shadow = css`
  box-shadow: -20px 20px 40px 5px rgba(0, 0, 0, 0.75);
`;

const headerIconSize = css`
  width: 80px;
  height: 80px;

  ${({ theme }) => theme.media.phone`
    width: 60px;
    height: 60px;
  `}
`;

const formTextField = css`
  height: 2em;
  padding: 3px 6px;
  outline: none;
  ${({ theme }) => theme.ui.corners}
`;

const formButton = css`
  height: 2em;
  padding: 3px 6px;
  outline-width: 0;
  ${({ theme }) => theme.ui.corners}
`;

const item = css`
  ${({ theme }) => theme.div}
  ${({ theme }) => theme.ui.corners}
  ${({ theme }) => theme.ui.shadow}
  ${({ theme }) => theme.BackgroundColor.black1}
`;

const MainTheme = props => {
  return (
    <>
      <ThemeProvider
        theme={{
          mainAppThemeColors,
          mainAppThemeFonts,
          media: createMediaqueries(screenSizes),
          color: createsCss('color', mainAppThemeColors),
          BackgroundColor: createsCss('background-color', mainAppThemeColors),
          font: createsCss('font-family', mainAppThemeFonts),
          div,
          ui: {
            corners,
            shadow,
            headerIconSize,
            formTextField,
            formButton,
            item,
          },
        }}
      >
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default MainTheme;
