import { createGlobalStyle } from 'styled-components'

export const FarnientePageStyles = createGlobalStyle`
  main#farniente {
      margin-top: 80px;
    .h1, .h3, p, .btn {
      line-height: 29px;
    }
    .h1 {
      font-size: 56px;
      margin-bottom: 8%;
      text-transform: uppercase;
    }
    .h3 {
      margin-bottom: 8%;
      font-size: 24px;
      text-transform: uppercase;
    }
    .btn {
      font-size: 17px;
      text-transform: uppercase;
    }
    .p {
      font-size: 16px;
      p {
        text-transform: none;
      }
    }

    &.mobile {
      .h1, .h3, p, .btn {
        line-height: 23px;
      }
      .h1 {
        font-size: 24px;
        margin-bottom: 2%;
      }
      .h3 {
        margin-bottom: 2%;
        font-size: 20px;
      }
      .btn {
        font-size: 13px;
      }
      .p {
        font-size: 13px;
      }

      .item {
        width: 100% !important;
      }
      .sc-column p,
      .section p {
        margin: 2% 0;
      }
    }
  }
`
