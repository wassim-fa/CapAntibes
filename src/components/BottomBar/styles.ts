import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 3;

  height: ${(props) => props.theme.bottomBar}px;
  width: 100%;

  font-size: 17px;
  font-family: ${(props) => props.theme.fontStyles.medium};
  text-transform: uppercase;

  color: ${(props) => props.theme.fontColors.primary};
  background-color: ${(props) => props.theme.bgColors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid ${(props) => props.theme.fontColors.primary};
`
