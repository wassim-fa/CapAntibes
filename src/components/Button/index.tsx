import Colors from '@/enums/colors'
import { TCssSize } from '@/interfaces'
import arrowLeft from '../.././../public/assets/images/global/arrow-left.svg'
import arrowRight from '../.././../public/assets/images/global/arrow-right.svg'
import arrowLeftYellow from '../.././../public/assets/images/global/arrow-left-yellow.svg'
import arrowRightYellow from '../.././../public/assets/images/global/arrow-right-yellow.svg'

import { PropsWithChildren } from 'react'
import * as S from './styles'
import Image from 'next/image'

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
}: PropsWithChildren<ButtonProps>) => {
  const imgArrowLeft = opt_color === Colors.YELLOW ? arrowLeftYellow : arrowLeft
  const imgArrowRight =
    opt_color === Colors.YELLOW ? arrowRightYellow : arrowRight
  return (
    <S.Wrapper
      className={`sc-button ${props.className}`}
      {...props}
      width={opt_width}
    >
      {opt_arrow_position === 'left' && (
        <Image src={imgArrowLeft} alt="fleche" />
      )}
      {children}
      {opt_arrow_position === 'right' && (
        <Image src={imgArrowRight} alt="fleche" />
      )}
    </S.Wrapper>
  )
}

export default Button
