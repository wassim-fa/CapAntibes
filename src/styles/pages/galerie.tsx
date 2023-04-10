import { createGlobalStyle } from 'styled-components'

export const GaleriePageStyles = createGlobalStyle`
  main#galerie {
      margin-top: 80px;

    &.mobile {
      img {
        height: auto;
      }
    }
  }
`
