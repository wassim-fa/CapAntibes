import styled, { keyframes } from 'styled-components'

const slideLeft = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`
const slideRight = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2px 0;

  p {
    line-height: 73px;
    color: #d99b81;
  }

  &:hover > *:first-child p {
    color: #f3d7c8;
  }

  &.mobile > *:first-child {
    margin: 10px 0;
  }
  &.mobile p {
    line-height: 51px;
  }
`
export const SubItem = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  display: none;

  &.active {
    display: flex;
  }
`
export const Link = styled.div`
  display: flex;

  > *:hover {
    color: #f3d7c8;
  }
  > * {
    margin: 0.4% 0;
  }
`
export const Wrapper = styled.div`
  p {
    line-height: 73px;
    color: #d99b81;
  }

  &:hover p,
  p:hover {
    color: #f3d7c8;
  }

  &.mobile {
    transform: translateX(100%);
    display: flex;
  }
  &[data-open='open'].mobile {
    animation: ${slideLeft} 1s forwards ease-in-out;
  }

  &[data-open='close'].mobile {
    animation: ${slideRight} 1s forwards ease-in-out;
  }

  &[data-open='open']:not(.mobile) {
    display: flex;
  }

  &[data-open='close']:not(.mobile) {
    display: none;
  }

  display: none;
  position: fixed;
  top: 0;
  z-index: 3;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.bgColors.primary};
  width: 100vw;
  height: 100%;
  color: ${(props) => props.theme.fontColors.primary};
  font-family: ${(props) => props.theme.fontStyles.medium};

  margin-top: ${(props) => props.theme.navBar.laptop}px;
  padding-top: 5.5%;
  padding-left: 4%;
  &.mobile {
    padding-top: 20%;
    padding-left: 5%;
    margin-top: ${(props) => props.theme.navBar.laptop}px;
    height: calc(100% - 85px);
  }
  padding-left: 4%;
  .list {
    display: flex;
    flex-direction: column;

    div {
      cursor: pointer;
    }
  }

  .lang {
    color: #d99380;
    font-size: 20px;
    padding-bottom: 2%;

    > * {
      opacity: 0.5;
      padding: 3px 0;
    }
    .selected {
      opacity: 1;
    }
  }

  &.mobile {
    .lang {
      position: absolute;
      bottom: 80px;
    }
  }
`
