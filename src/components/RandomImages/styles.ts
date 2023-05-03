import styled, { keyframes } from 'styled-components'

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`
const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 95vh;
  position: relative;
  cursor: pointer;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &[data-imgtoshow='-1'] > * {
    :first-child {
      opacity: 1;
    }
    :last-child {
      opacity: 0;
    }
  }

  &[data-imgtoshow='0'] > * {
    :first-child {
      animation: ${fadeIn} 0.8s forwards ease-in-out;
    }
    :last-child {
      animation: ${fadeOut} 0.8s forwards ease-in-out;
    }
  }
  &[data-imgtoshow='1'] > * {
    :first-child {
      animation: ${fadeOut} 0.8s forwards ease-in-out;
    }
    :last-child {
      animation: ${fadeIn} 0.8s forwards ease-in-out;
    }
  }
`
