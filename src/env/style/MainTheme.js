import React from 'react';
import { css, ThemeProvider } from 'styled-components';
import * as mixins from './Mixins';
import * as animations from './Animations';

const createMediaQuery = (size, isMin) => {
  const constSizes = {
    phone: { size: '37.5em', isMin: false },
    tabPort: { size: '56.25em', isMin: false },
    tabLand: { size: '75em', isMin: false },
    bigDesktop: { size: '112.5em', isMin: true },

    // specific break points
    buttonsCentering: { size: '34.375em', isMin: true },
  };

  if (constSizes[size]) {
    isMin = constSizes[size].isMin;
    size = constSizes[size].size;
  }

  return (...args) => css`
    @media screen and (${isMin ? 'min-width' : 'max-width'}: ${size}) {
      ${css(...args)}
    }
  `;
};

const MainTheme = (props) => {
  return (
    <>
      <ThemeProvider
        theme={{
          // app css mixins
          mixins,

          // media quires
          media: createMediaQuery,

          //animations
          animations,
        }}
      >
        {props.children}
      </ThemeProvider>
    </>
  );
};

export default MainTheme;
