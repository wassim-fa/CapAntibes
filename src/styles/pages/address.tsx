import { createGlobalStyle } from 'styled-components'

export const AddressPageStyles = createGlobalStyle`
  main#address {
    .h3, p {
      line-height: 29px;
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
    &.mobile {
      .h3, p {
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
    }
  }
`
