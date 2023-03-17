import Colors from '@/enums/colors'
import { ICssSizeAbsolute, TCssAlign, TCssSize, TMargin } from '@/interfaces'
import {
  getCssSize,
  getMargins,
  getWidthForChildren,
  isCssSizeAbsolute
} from '@/utils'
import styled from 'styled-components'

type WrapperProps = {
  reverse: boolean
  justifyContent: TCssAlign
  alignItems: TCssAlign
  margin: TMargin
  spacing: TCssSize
  width: TCssSize
  nbChildren: number
  bgColor?: Colors
}
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  padding: ${(props) => getMargins(props.margin)};
  width: ${(props) => getCssSize(props.width)};
  background-color: ${(props) =>
    props.bgColor ? props.theme.bgColors[props.bgColor] : 'transparent'};
  > *:first-child {
    width: ${(props) => getWidthForChildren(props.nbChildren, props.spacing)};
    margin-right: ${(props) => getCssSize(props.spacing)};
  }
  > *:last-child {
    width: ${(props) => getWidthForChildren(props.nbChildren, props.spacing)};
    margin-left: ${(props) => getCssSize(props.spacing)};
  }
  > *:not(:first-child):not(:last-child) {
    width: ${(props) =>
      getWidthForChildren(
        props.nbChildren,
        isCssSizeAbsolute(props.spacing)
          ? {
              value: 2 * (props.spacing as ICssSizeAbsolute).value,
              unit: (props.spacing as ICssSizeAbsolute).unit
            }
          : 'initial'
      )};
    margin-left: ${(props) => getCssSize(props.spacing)};
    margin-right: ${(props) => getCssSize(props.spacing)};
  }
`
