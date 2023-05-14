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
  @supports (-webkit-touch-callout: none) {
    background-color: black;
  }

  @supports not (-webkit-touch-callout: none) {
    align-items: center;
    background-color: yellow;
  }
  cursor: pointer;
  width: ${(props) => getCssSize(props.width)};
`
