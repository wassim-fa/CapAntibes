import Colors from '@/enums/colors'
import Fonts from '@/enums/fonts'
import { PropsWithChildren } from 'react'
import * as S from './styles'

interface TextProps extends React.ComponentPropsWithoutRef<'input'> {
  opt_align?: 'center' | 'initial' | 'left' | 'right' | 'justify'
  opt_font?: Fonts
  opt_color?: Colors
  opt_size?: string
}
const Text = ({
  opt_align = 'initial',
  opt_font = Fonts.MEDIUM,
  opt_color = Colors.PRIMARY,
  opt_size = 'inherit',
  children,
  ...props
}: PropsWithChildren<TextProps>) => (
  <S.Wrapper
    className={`sc-text ${props.className}`}
    align={opt_align}
    font={opt_font}
    color={opt_color}
    size={opt_size}
  >
    <p>{children}</p>
  </S.Wrapper>
)

export default Text
