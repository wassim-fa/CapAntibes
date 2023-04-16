import { createGlobalStyle } from 'styled-components'

export const SpecialsOffersPageStyles = createGlobalStyle`
  main#specials-offers {
    .h3, p, .btn {
      line-height: 22px;
    }
    .h3 {
      text-transform: uppercase;
      font-size: 24px;
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
      .h3, p, .btn {
        line-height: 23px;
      }
      .h3 {
        font-size: 20px;
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
