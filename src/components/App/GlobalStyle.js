// eslint-disable-next-line no-unused-vars
import React from 'react';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #313331;
    margin: 0;
    padding: 0;
    
    /* color:${props => {
      if (props.color) {
        switch (props.color) {
          case 'grey1':
            return css`
              color: grey;
            `;
          default:
            return css`
              color: black;
            `;
        }
      }
    }} */
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
  }

  @font-face {
  font-family: 'myFont1-regular';
  src: url('/fonts/Kalam-Regular.ttf');
  }

  @font-face {
    font-family: 'myFont1-bold';
    src: url('/fonts/Kalam-Bold.ttf');
  }
  
`;

const sizes = {
  wideDesktop: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default GlobalStyle;
