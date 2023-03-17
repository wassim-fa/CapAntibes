import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
`

const sliderAnim = keyframes`
    from {
    transform: translateX(0);
    }

    to {
    transform: translateX(-50%);
    }
`
const sliderAnimMobile = keyframes`
    from {
    transform: translateX(0);
    }

    to {
    transform: translateX(-100%);
    }
`
type SliderProps = {
  nbChildren: number
  isLaptop: boolean
}
export const Slider = styled.div<SliderProps>`
  animation: ${(props) => (props.isLaptop ? sliderAnim : sliderAnimMobile)} 30s
    infinite linear;
  display: flex;
  width: ${(props) => `${props.nbChildren * 100}vw`};
`
