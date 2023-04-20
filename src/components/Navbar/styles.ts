import { getMargin } from '@/utils'
import styled from 'styled-components'

type PartProps = {
  flex: number
  align: 'flex-start' | 'flex-end' | 'center'
}
export const Part = styled.div<PartProps>`
  display: flex;
  flex-direction: row;
  flex: ${(props) => props.flex};
  align-items: center;
  height: 100%;
  justify-content: ${(props) => props.align};
  margin-left: ${(props) => (props.align === 'flex-start' ? getMargin() : 0)};
  margin-right: ${(props) => (props.align === 'flex-end' ? getMargin() : 0)};
  z-index: 2;

  [data-islarge='true'] {
    height: auto;
    width: clamp(20vw, 100%, 34vw);
  }

  [data-islarge='false'] {
    height: auto;
    width: clamp(20vw, 100%, 40vw);
  }
`

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  z-index: 4;

  height: ${(props) => props.theme.navBar.laptop}px;
  .mobile {
    height: ${(props) => props.theme.navBar.mobile}px;
  }
  width: 100%;

  font-family: ${(props) => props.theme.fontStyles.medium};
  text-transform: uppercase;

  color: ${(props) => props.theme.fontColors.primary};
  background-color: ${(props) => props.theme.bgColors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: '';
    display: block;
    background-color: black;
    height: ${(props) => props.theme.navBar.laptop}px;
  }
  &.mobile::after {
    height: ${(props) => props.theme.navBar.mobile}px;
  }
`
