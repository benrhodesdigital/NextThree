import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {height:100%} 
  body {
    margin:0;
    padding:4rem;
    font-family: din regular;
    box-sizing: border-box;
    background: #C5D3E6;
  }

  .sr-only {
    position: absolute;
    height: 1px;
    width: 1px;
    clip: rect(1px 1px 1px 1px); // IE 6 and 7
    clip: rect(1px,1px,1px,1px);
    clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
    overflow: hidden !important;
  }

  @font-face {
    font-family: 'din regular';
    font-style: normal;
    font-weight: normal;
    src: local('D-DIN Regular'), url('./fonts/din/D-DIN.woff') format('woff');
  }
  
  @font-face {
    font-family: 'din italic';
    font-style: normal;
    font-weight: normal;
    src: local('D-DIN DIN-Italic'), url('./fonts/din/D-DIN-Italic.woff') format('woff');
  }
  
  @font-face {
    font-family: 'din bold';
    font-style: normal;
    font-weight: normal;
    src: local('D-DIN DIN-Bold'), url('./fonts/din/D-DIN-Bold.woff') format('woff');
  }
  
  @font-face {
    font-family: 'din condensed regular';
    font-style: normal;
    font-weight: normal;
    src: local('D-DIN Condensed Regular'), url('./fonts/din/D-DINCondensed.woff') format('woff');
  }

  @font-face {
    font-family: 'din condensed bold';
    font-style: normal;
    font-weight: normal;
    src: local('D-DIN Condensed DINCondensed-Bold'), url('./fonts/din/D-DINCondensed-Bold.woff') format('woff');
  }

  @font-face {
    font-family: 'din exp';
    font-style: normal;
    font-weight: normal;
    src: local('D-DIN Exp Regular'), url('./fonts/din/D-DINExp.woff') format('woff');
  }
  
  @font-face {
    font-family: 'din exp';
    font-style: italic;
    font-weight: normal;
    src: local('D-DIN Exp DINExp-Italic'), url('./fonts/din/D-DINExp-Italic.woff') format('woff');
  }
  
  @font-face {
    font-family: 'din exp';
    font-style: normal;
    font-weight: bold;
    src: local('D-DIN Exp DINExp-Bold'), url('./fonts/din/D-DINExp-Bold.woff') format('woff');
  }
`;

export default GlobalStyles;