import Colors from '@/enums/colors'
import { TCssSize } from '@/interfaces'
import { defaultTheme } from '@/styles'
import { PropsWithChildren } from 'react'
import * as S from './styles'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  opt_color?: Colors
  opt_width?: TCssSize
}
const Button = ({
  opt_color = Colors.PRIMARY,
  opt_width = 'fit-content',
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <S.Wrapper
    className={`sc-button ${props.className}`}
    {...props}
    width={opt_width}
  >
    {children}
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.5L16 9.5L1 19"
        stroke={defaultTheme.fontColors[opt_color]}
        strokeWidth="2"
      />
    </svg>
  </S.Wrapper>
)

export default Button
