import { createGlobalStyle } from 'styled-components'

export const PrivatisationPageStyles = createGlobalStyle`
  main#privatisation {
      margin-top: 80px;
    .h1, .h3, p, .btn {
      line-height: 29px;
    }
    .h1 {
      font-size: 56px;
      margin-bottom: 8%;
    }
    .h3 {
      font-size: 24px;
    }
    .btn {
      font-size: 22px;
    }
    .p {
      font-size: 17px;
    }

    &.mobile {
      .h1, .h3, p, .btn {
        line-height: 23px;
      }
      .h1 {
        font-size: 24px;
      }
      .h3 {
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
        margin: 5% 0;
      }
    }
  }
`
