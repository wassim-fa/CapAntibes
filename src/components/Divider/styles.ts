import Colors from '@/enums/colors'
import { TCssSize } from '@/interfaces'
import { getCssSize } from '@/utils'
import styled from 'styled-components'

type WrapperProps = {
  height: TCssSize
  width: TCssSize
  color: Colors
}

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${(props) => props.theme.bgColors[props.color]};
  height: ${(props) => getCssSize(props.height)};
  width: ${(props) => getCssSize(props.width)};
`
