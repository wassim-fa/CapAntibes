import { TCssSize } from '@/interfaces'
import { getCssSize } from '@/utils'
import styled from 'styled-components'

type WrapperProps = {
  width: TCssSize
}
export const Wrapper = styled.button<WrapperProps>`
  > * {
    margin: 0 10px;
  }
  svg {
    height: 100%;
  }
  > *:first-child {
    margin-left: 0;
  }
  > *:last-child {
    margin-left: 0;
  }
  display: flex;
  align-items: center;
  @supports (-webkit-touch-callout: none) {
    align-items: initial;
    background-color: black;
  }
  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi) {
    align-items: initial;
  }
  cursor: pointer;
  width: ${(props) => getCssSize(props.width)};
`
