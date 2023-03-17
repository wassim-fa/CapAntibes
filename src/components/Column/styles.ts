import Colors from '@/enums/colors'
import { TCssAlign, TCssSize, TMargin } from '@/interfaces'
import { getCssSize, getMargins } from '@/utils'
import styled from 'styled-components'

type WrapperProps = {
  reverse: boolean
  justifyContent: TCssAlign
  alignItems: TCssAlign
  margin: TMargin
  spacing: TCssSize
  width: TCssSize
  bgColor?: Colors
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => getMargins(props.margin)};
  width: ${(props) => getCssSize(props.width)};
  background-color: ${(props) =>
    props.bgColor ? props.theme.bgColors[props.bgColor] : 'transparent'};

  > *:first-child {
    margin-bottom: ${(props) => getCssSize(props.spacing)};
  }
  > *:last-child {
    margin-top: ${(props) => getCssSize(props.spacing)};
  }
  > *:not(:first-child):not(:last-child) {
    margin-top: ${(props) => getCssSize(props.spacing)};
    margin-bottom: ${(props) => getCssSize(props.spacing)};
  }
`
