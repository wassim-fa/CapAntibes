import { createGlobalStyle } from 'styled-components'

export const WellHealthPageStyles = createGlobalStyle`
  main#well-health {
      margin-top: 80px;
    .h1, .h3, p, .btn {
      line-height: 22px;
    }
    .h1 {
      font-size: 56px;
      text-transform: uppercase;
      margin-bottom: 8%;
    }
    .h3 {
      font-size: 24px;
      text-transform: uppercase;
      margin-bottom: 8%;
    }
    .btn {
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 16px;
    }
    .p {
      font-size: 17px;
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
