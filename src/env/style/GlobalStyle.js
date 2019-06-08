import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 16px;
    height: 100vh;
    width: 100%;
    ${({
      theme: {
        media: { phone },
      },
    }) => phone`
      font-size: 12px;
    `}
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    ${({
      theme: {
        color: { white2 },
      },
    }) => white2}
    ${({
      theme: {
        BackgroundColor: { grey1 },
      },
    }) => grey1}
  }

  #root {
    height: 100%;
    width: 100%;
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.5rem;
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

export default GlobalStyle;
