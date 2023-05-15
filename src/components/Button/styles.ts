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

  .is-apple & {
    background-color: red;
  }
  .is-not-apple & {
    align-items: center;
    background-color: blue;
  }
  cursor: pointer;
  width: ${(props) => getCssSize(props.width)};
`
