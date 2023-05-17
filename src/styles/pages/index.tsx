import { createGlobalStyle } from 'styled-components'

export const IndexPageStyles = createGlobalStyle`
  main#home {
    margin-top: 85px;
    .icon-fish {
      width: auto;
    }
    .h3, p, .btn {
      line-height: 22px;
    }
    .h3 {
      text-transform: uppercase;
      font-size: 24px;
      margin-bottom: 20px;
      img {
        padding-left: 20px;
      }
    }
    .btn {
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 16px;
      svg {
        height: 22px !important;
      }
    }
    .p {
      font-size: 17px;
      p {
        text-transform: none;
      }
    }
    .yellow {
      border: 3px solid #FAB50B;
    }
    &.mobile {
      .h3, p, .btn {
        line-height: 23px;
      }
      .h3 {
        font-size: 20px;
        margin-bottom: 15px;
      }
      .btn {
        svg {
          height: 23px !important;
        }
        margin-top: 10px;
        font-size: 14px;
      }
      .p {
        font-size: 13px;
        p {
          text-transform: none;
        }
      }
      .yellow { 
        margin-top: 42px;
      }
    }
  }
`
