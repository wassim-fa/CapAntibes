import Colors from '@/enums/colors'
import { TCssAlign, TCssSize, TMargin } from '@/interfaces'
import { PropsWithChildren } from 'react'
import * as S from './styles'

interface ColumnProps extends React.ComponentPropsWithoutRef<'div'> {
  opt_reverse?: boolean
  opt_justifyContent?: TCssAlign
  opt_alignItems?: TCssAlign
  opt_margin?: TMargin
  opt_spacing?: TCssSize
  opt_width?: TCssSize
  opt_bgColor?: Colors
}

const Column = ({
  opt_reverse = false,
  opt_justifyContent = 'flex-start',
  opt_alignItems = 'flex-start',
  opt_margin = [0, 0, 0, 0],
  opt_width = {
    value: 100,
    unit: '%'
  },
  opt_spacing = 'initial',
  opt_bgColor,
  children,
  ...props
}: PropsWithChildren<ColumnProps>) => (
  <S.Wrapper
    className={`sc-column ${props.className}`}
    reverse={opt_reverse}
    justifyContent={opt_justifyContent}
    alignItems={opt_alignItems}
    margin={opt_margin}
    spacing={opt_spacing}
    width={opt_width}
    bgColor={opt_bgColor}
    {...props}
  >
    {children}
  </S.Wrapper>
)

export default Column
