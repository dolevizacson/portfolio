import React from 'react';
import { css, ThemeProvider } from 'styled-components';

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

const MainTheme = props => {
  return (
    <>
      <ThemeProvider
        theme={{
          media: createMediaqueries(screenSizes),
          color: createsCss('color', mainAppThemeColors),
          BackgroundColor: createsCss('background-color', mainAppThemeColors),
          font: createsCss('font-family', mainAppThemeFonts),
        }}
      >
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default MainTheme;
