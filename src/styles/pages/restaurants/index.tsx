import { createGlobalStyle } from 'styled-components'

export const RestaurantsPageStyles = createGlobalStyle`
  main#restaurants {
    margin-top: 80px;
    .section { 
      gap: 4%;
    }
    .h3, .h5, .h6, .p, .btn {
      line-height: 22px;
    }
    .h3 {
      text-transform: uppercase;
      font-size: 24px;
      margin-bottom: 20px;
    }
    .h5 {
      text-transform: uppercase;
      margin: 0;
      font-size: 22px;
    }
    .h6 {
      text-transform: uppercase;
      font-size: 20px;
      margin-top: 0px;
      margin-bottom: 20px;
    }
    .p {
      font-size: 17px;
      p {
        text-transform: none;
      }
    }
    .btn {
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 16px;
    }
    &.mobile {
      .h3, .h5, .h6, .p, .btn {
        line-height: 23px;
      }
      .h3 {
        font-size: 20px;
        margin-bottom: 15px;
      }
      .h5 {
        font-size: 17px;
      }
      .h6 {
        font-size: 13px;
        margin-bottom: 15px;
      }
      .p {
        font-size: 13px;
        p {
          text-transform: none;
        }
      }
      .btn {
        font-size: 13px;
      }
    }
  }
`
