import Colors from '@/enums/colors'
import { TCssSize } from '@/interfaces'
import { defaultTheme } from '@/styles'
import { PropsWithChildren } from 'react'
import * as S from './styles'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  opt_color?: Colors
  opt_width?: TCssSize
  opt_arrow_position?: 'left' | 'right'
}
const Button = ({
  opt_color = Colors.PRIMARY,
  opt_width = 'fit-content',
  opt_arrow_position = 'right',
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => (
  <S.Wrapper
    className={`sc-button ${props.className}`}
    {...props}
    width={opt_width}
  >
    {opt_arrow_position === 'left' && (
      <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 17.9776L3 10.5728L18 1.77957"
          stroke={defaultTheme.fontColors[opt_color]}
          strokeWidth="2"
        />
      </svg>
    )}
    {children}
    {opt_arrow_position === 'right' && (
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
    )}
  </S.Wrapper>
)

export default Button
