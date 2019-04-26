import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    ${props => props.theme.BackgroundColor.grey1}
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
  }

  h4 {
    font-size: 2em;
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
