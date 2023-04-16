import { createGlobalStyle } from 'styled-components'

export const RoomPageStyles = createGlobalStyle`
  main#room {
      margin-top: 80px;
    .h3, .p, .btn, .menu, .item {
      line-height: 22px;
    }    
    .h3 {
      font-size: 24px;
    }
    .btn {
      margin-top: 15px;
      text-transform: uppercase;
      font-size: 16px;
    }
    .p {
      font-size: 17px;
    }
    .menu {
      font-size: 22px;
    }
    .item {
      font-size: 11px;
    }

    .menu-middle p {
      line-height: normal;
      border-bottom: 2px solid ${(props) => props.theme.fontColors.primary};
      padding-bottom: -5px;
    }
    
    .section .btn {
      margin-left: 5%
    }

    &.mobile {
    .h3, .p, .btn, .menu, .item {
        line-height: 23px;
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
      .menu {
        font-size: 13px;
      }
      .item {
        font-size: 10px;
      }

      .menu > a {
        margin: 5px 0;
      }

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
