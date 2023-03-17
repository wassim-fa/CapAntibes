import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'EurostileMediumExt';
  src: url('assets/fonts/EurostileMediumExtended.otf') format('truetype');
  font-style: normal;
}
@font-face {
  font-family: 'EurostileBlackExt';
  src: url('assets/fonts/EurostileBlackExtended.woff2') format('woff2'), url('assets/fonts/EurostileBlackExtended.woff') format('woff');
  font-style: normal;
}

  html {
    font-size: 62.5%;
    background-color: #FFF;
  }

  html, body, #__next {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'EurostileBlackExt';
  }

  main {
    position: relative;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-transform: uppercase;
  }

  a {
      color: inherit;
      text-decoration: none;
  }

  button {
    font-size: inherit;
    text-transform: inherit;
    background-color: transparent;
    border: none;
    width: fit-content;
  }

  .fullWidth {
    width: 100%;
    height: auto;
  }
`

export default GlobalStyles
