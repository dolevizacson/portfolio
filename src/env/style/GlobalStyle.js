import { createGlobalStyle } from 'styled-components';

// assets
import RobotoBlack from '../../assets/fonts/Roboto-Black.ttf';
import RobotoBlackItalic from '../../assets/fonts/Roboto-BlackItalic.ttf';
import RobotoBold from '../../assets/fonts/Roboto-Bold.ttf';
import RobotoBoldItalic from '../../assets/fonts/Roboto-BoldItalic.ttf';
import RobotoItalic from '../../assets/fonts/Roboto-Italic.ttf';
import RobotoLight from '../../assets/fonts/Roboto-Light.ttf';
import RobotoLightItalic from '../../assets/fonts/Roboto-LightItalic.ttf';
import RobotoMedium from '../../assets/fonts/Roboto-Medium.ttf';
import RobotoMediumItalic from '../../assets/fonts/Roboto-MediumItalic.ttf';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.ttf';
import RobotoThin from '../../assets/fonts/Roboto-Thin.ttf';
import RobotoThinItalic from '../../assets/fonts/Roboto-ThinItalic.ttf';

import RowdiesBold from '../../assets/fonts/Rowdies-Bold.ttf';
import RowdiesLight from '../../assets/fonts/Rowdies-Light.ttf';
import RowdiesRegular from '../../assets/fonts/Rowdies-Regular.ttf';

const GlobalStyle = createGlobalStyle`

  /* css variables */
  :root {
    /* colors */
    --ui-main-color-1: rgb(195,7,63);
    --ui-main-color-2: rgb(149,7,64);
    --ui-main-color-3: rgb(111,34,50);
    --ui-main-color-4: rgb(78,78,80);
    --ui-main-color-5: rgba(26,26,29,1);

    --ui-general-color-1: rgba(0,0,0,1);
    --ui-general-color-2: rgba(255,255,255,1);
    --ui-general-color-3: rgba(136,136,136,1);

    --ui-specific-color-1: rgba(255,255,255, 0.8); /* navbar links hover, focus */ 
    --ui-specific-color-2: rgba(10,10,10,1); /* ui header background */ 
    --ui-specific-color-3: rgba(255, 255, 255, 0.7); /* ui header border */
    --ui-specific-color-4: rgba(10,10,10,1); /* ui text block background */
    --ui-specific-color-5: rgba(255, 255, 255, 0.7); /* ui text block border */
    --ui-specific-color-6: rgba(0,0,0,.7);; /* app modal background */
    

    --ui-font-color-1: rgba(255,255,255,1); /* main font color */
   
    --ui-font-color-error-1: rgb(195,7,63); /*  input field error */
    
    /* fonts */
    --ui-header-font-1: 'Rowdies', cursive;
    --ui-font-1: 'Roboto', sans-serif;

    /* shadows */
    --ui-shadow-1: inset 0px 0px 5px 1px var(--ui-specific-color-1);  /* navbar links hover, focus */
    --ui-shadow-2: 0px 0px 7px 3px var(--ui-main-color-1);  /* input field */

    /* corners */
    --ui-corners-1: 4px;
    --ui-corners-2: 4px; /* ui button */
    --ui-corners-3: 6px; /* ui input field */

    /* sizes / spacing */
    --navbar-height: 5rem;
    --ui-grid-gap-1: 2rem; /* between text blocks */
    --ui-grid-gap-2: 1rem; /* inside text block body */
    --ui-grid-gap-3: 5rem; /* between page elements */
    --ui-grid-gap-4: 0.6rem; /* between footer icons */
    --ui-grid-gap-5: 1.2rem; /* between skills list long data */
    --ui-top-bottom-margin: 4.5rem 0;
    --ui-loading-top-bottom-margin: 7rem auto;
    --ui-text-block-vertical: 1.5rem;
    --ui-text-block-horizontal: 2.5rem;
    --blog-post-grid-1: 2.5rem;/* between text blocks */
    --blog-post-grid-2: 1.7rem; /* inside text block body */
  }
  /* fonts imports */
  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    src: url(${RobotoBlack});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 900;
    font-style: italic;
    src: url(${RobotoBlackItalic});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    src: url(${RobotoBold});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: italic;
    src: url(${RobotoBoldItalic});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    src: url(${RobotoMedium});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: italic;
    src: url(${RobotoMediumItalic});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    src: url(${RobotoRegular});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: italic;
    src: url(${RobotoItalic});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    src: url(${RobotoLight});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 300;
    font-style: italic;
    src: url(${RobotoLightItalic});
  }
  
  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    src: url(${RobotoThin});
  }
  @font-face {
    font-family: 'Roboto';
    font-weight: 100;
    font-style: italic;
    src: url(${RobotoThinItalic});
  }

  @font-face {
    font-family: 'Rowdies';
    font-weight: 700;
    src: url(${RowdiesBold});
  }
  @font-face {
    font-family: 'Rowdies';
    font-weight: 400;    
    src: url(${RowdiesRegular});
  }
  @font-face {
    font-family: 'Rowdies';
    font-weight: 300;    
    src: url(${RowdiesLight});
  }

  /* base css settings */
  * {
    margin: 0;
    padding: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: inherit;
  }

  html {
    box-sizing: border-box;
    
    /* 1rem = 10px => 10px/16px = 62.5% */
    font-size: 62.5%; 
    /* 75em 1200px tab land 56.25%  9px*/
    ${(props) => props.theme.media('tabLand')`font-size: 56.25%`}
    /* 56.25em 900px tab port 50%  8px*/
    ${(props) => props.theme.media('tabPort')`font-size: 50%`}
    /* 37.5em 600px phone 43.75% 7x */
    ${(props) => props.theme.media('phone')`font-size: 43.75%`}
    /* 112.5em 1800px big desktop (min-width) 75% 12px*/
    ${(props) => props.theme.media('bigDesktop')`font-size:  75%`}
  }

  body {
    font-family:var(--ui-font-1);
    font-size: 1.4rem;
    line-height:1.4;
    background-color: var(--ui-general-color-1);
    color: var(--ui-font-color-1);
    letter-spacing: 0.1rem;
  }

  /* typography */
  h1 {
    font-family: var(--ui-header-font-1);
    font-size: 2.3rem;
    text-transform:uppercase;
    font-weight: 400;
    letter-spacing: 0.2rem; 
  }

  h2 {
    font-family: var(--ui-header-font-1);
    font-size: 1.7rem;
    text-transform:uppercase;
    font-weight: 400;
  }

  h3 {
    font-family: var(--ui-font-1);
    font-size: 1.6rem;
    font-weight: 500;
  }

  input {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--ui-general-color-1);
    line-height: inherit;
    letter-spacing: 0.1rem; 
  }

  textarea {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--ui-general-color-1);
    line-height: inherit;
    letter-spacing: 0.1rem; 
  }

  ::selection {
    color: var(--ui-general-color-2);
    background-color: var(--ui-main-color-1);
  }

`;

export default GlobalStyle;
