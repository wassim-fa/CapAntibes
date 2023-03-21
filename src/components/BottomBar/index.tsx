import { contentsLayout } from '@/contents/globals'
import { useIsMobile, useText } from '@/hooks'
import { BookMenuContext } from '@/stores'
import { useContext, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Divider from '../Divider'
import * as S from './styles'

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(0%);
  }
`
const slideUp = keyframes`
  from {
    transform: translateY(0%);
  }
  
  to {
    transform: translateY(-100%);
  }
`

const ToBookMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 76px;
  transform: translateY(-100%);
  width: 100%;
  height: calc(100% - 143px);
  z-index: 2;

  &[data-open='true'] {
    animation: ${slideDown} 1s forwards ease-in-out;
  }
  &[data-open='false'] {
    animation: ${slideUp} 1s forwards ease-in-out;
  }

  color: ${(props) => props.theme.fontColors.primary};
  background-color: ${(props) => props.theme.bgColors.primary};

  > * {
    margin: 2% 0;
    text-align: center;
  }
`
const BottomBar = () => {
  const { isBookMenuOpen, setIsBookMenuOpen } = useContext(BookMenuContext)
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const handleClick = () => {
    setIsOpen(!isOpen)
    setIsBookMenuOpen(!isBookMenuOpen)
  }
  const isMobile = useIsMobile()
  const texts = {
    room: useText(contentsLayout.room),
    baba: useText(contentsLayout.baba),
    fishing: useText(contentsLayout.fishing),
    health: useText(contentsLayout.health),
    private: useText(contentsLayout.private),
    book: useText(contentsLayout.book)
  }
  if (isMobile) {
    return (
      <>
        <ToBookMenuContainer
          data-open={isOpen}
          className="sc-tobook-menu"
          style={{ fontSize: '14px', cursor: 'pointer' }}
        >
          <Divider />
          <div onClick={handleClick}>{texts.room}</div>
          <Divider />
          <div onClick={handleClick}>{texts.baba}</div>
          <Divider />
          <div onClick={handleClick}>{texts.fishing}</div>
          <Divider />
          <div onClick={handleClick}>{texts.health}</div>
          <Divider />
          <div onClick={handleClick}>{texts.private}</div>
        </ToBookMenuContainer>
        <S.Wrapper onClick={handleClick}>{texts.book}</S.Wrapper>
      </>
    )
  } else {
    return <></>
  }
}

export default BottomBar