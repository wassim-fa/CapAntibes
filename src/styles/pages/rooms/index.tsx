import { createGlobalStyle } from 'styled-components'

export const RoomsPageStyles = createGlobalStyle`
  main#rooms {
      margin-top: 80px;
      .imgs > *{
        height: auto
      }
    .h1, .h3, p, .btn {
      line-height: 22px;
    }
    .h1 {
      font-size: 56px;
      text-transform: uppercase;
      margin-bottom: 70px;
    }
    .h3 {
      font-size: 24px;
      text-transform: uppercase;
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

    .section .btn {
      margin-left: 5%
    }

    &.mobile {
      
    .div-orange {
      background-color: red;
    }
      .h1, .h3, p, .btn {
        line-height: 23px;
      }
      .h1 {
        font-size: 24px;
        margin-bottom: 20px;
      }
      .h3 {
        font-size: 20px;
      }
      .btn {
        margin-top: 10px;
        font-size: 14px;
      }
      .p {
        font-size: 13px;
        p {
          text-transform: none;
        }
      }

      .sc-column p,
      .section p {
        margin: 5% 0;
      }
      .section .btn {
        margin-top: 2%;
        margin-left: inherit;
      }
    }
  }
`
