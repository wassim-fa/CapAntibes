import Colors from '@/enums/colors'
import Fonts from '@/enums/fonts'
import styled from 'styled-components'

type WrapperProps = {
  align: 'center' | 'initial' | 'left' | 'right' | 'justify'
  font: Fonts
  color: Colors
  size: string
}

export const Wrapper = styled.div<WrapperProps>`
  font-family: ${(props) => props.theme.fontStyles[props.font]};
  color: ${(props) => props.theme.fontColors[props.color]};
  text-align: ${(props) => props.align};
  font-size: ${(props) => props.size};

  p {
    text-align: ${(props) => props.align};
  }
`
