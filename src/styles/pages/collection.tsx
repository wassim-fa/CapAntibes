import { createGlobalStyle } from 'styled-components'

export const CollectionPageStyles = createGlobalStyle`
  main#collection {
    p, .btn {
      line-height: 29px;
    }
    .p {
      font-size: 17px;
      p {
        text-transform: none;
      }
    }
    .btn {
      margin-top: 15px;
      font-size: 22px;
      text-transform: uppercase;
    }
    #address-btn {
      height: 45px;
      width: auto;
    }
    &.mobile {
      p, .btn {
        line-height: 23px;
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
      #address-btn {
        height: 35px;
        width: auto;
      }
    }
  }
`
