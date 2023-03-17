import Colors from '@/enums/colors'
import { TCssSize } from '@/interfaces'
import * as S from './styles'

interface DividerProps extends React.ComponentPropsWithoutRef<'div'> {
  opt_height?: TCssSize
  opt_width?: TCssSize
  opt_color?: Colors
}
const Divider = (props: DividerProps) => {
  const {
    opt_height = { value: 2, unit: 'px' },
    opt_width = { value: 100, unit: '%' },
    opt_color = Colors.SECONDARY
  } = props
  return (
    <S.Wrapper
      className={`sc-divider ${props.className}`}
      height={opt_height}
      width={opt_width}
      color={opt_color}
    ></S.Wrapper>
  )
}

export default Divider
