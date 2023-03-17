import { getMargin } from '@/utils'
import styled from 'styled-components'

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;

  &.mobile::after {
    content: '';
    display: block;
    height: 67px;
  }
`

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - ${getMargin(2)});
  margin: 20px ${getMargin()};
`

type PartProps = {
  direction: 'row' | 'column'
  align: 'space-between' | 'center' | 'space-around'
  fontSize: string
}
export const Part = styled.div<PartProps>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.align};
  font-size: ${(props) => props.fontSize};

  form {
    width: 100%;
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.align};
    font-size: ${(props) => props.fontSize};
  }
`
