import React from 'react';
import { css, ThemeProvider } from 'styled-components';

const screenSizes = {
  wideDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const colors = {};

const BackgroundColors = {
  black1: '#1a1a1d',
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
      ${name} : ${options[option]}
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
          color: createsCss('color', colors),
          BackgroundColor: createsCss('background-color', BackgroundColors),
        }}
      >
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default MainTheme;
