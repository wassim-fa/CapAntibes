import { useIsLaptop } from '@/hooks'
import { Children } from 'react'
import * as S from './styles'

const InfinitySlider = ({ children }: { children: React.ReactNode }) => {
  const isLaptop = useIsLaptop()
  return (
    <S.Wrapper className="sc-infinity-sliders">
      <S.Slider isLaptop={isLaptop} nbChildren={Children.count(children)}>
        {children}
      </S.Slider>
    </S.Wrapper>
  )
}

export default InfinitySlider
