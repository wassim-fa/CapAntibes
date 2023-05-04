import { contentsLayout } from '@/contents/globals'
import { useIsLaptop, useText } from '@/hooks'
import { MenuContext } from '@/stores'
import { useContext, useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Divider from '../Divider'
import * as S from './styles'

const slideDown = keyframes`
  from {
    top: 0px;
    transform: translateY(-100%);
  }

  to {
    top: 76px;
    transform: translateY(0%);
  }
`
const slideUp = keyframes`
  from {
    top: 76px;
    transform: translateY(0%);
  }

  to {
    top: 0px;
    transform: translateY(-100%);
  }
`

const ToBookMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 0;
  transform: translateY(-100%);
  width: 100%;
  height: calc(100% - 143px);
  z-index: 3;

  &[data-open='open'] {
    animation: ${slideDown} 1s forwards ease-in-out;
  }
  &[data-open='close'] {
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
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const [menuStatus, setMenuStatus] = useState<'close' | 'open' | 'undefined'>(
    'undefined'
  )
  const handleClick = () => {
    const value = menuOpen === 'tobook' ? 'tobook-close' : 'tobook'
    setMenuOpen(value)
  }
  const isLaptop = useIsLaptop()
  const linksHref = {
    room: useText(contentsLayout.linkRoom),
    baba: useText(contentsLayout.linkBaba),
    fishing: useText(contentsLayout.linkFishing),
    health: useText(contentsLayout.linkHealth),
    private: useText(contentsLayout.linkPrivate)
  }
  const texts = {
    room: useText(contentsLayout.room),
    baba: useText(contentsLayout.baba),
    fishing: useText(contentsLayout.fishing),
    health: useText(contentsLayout.health),
    private: useText(contentsLayout.private),
    book: useText(contentsLayout.book)
  }

  useEffect(() => {
    switch (menuOpen) {
      case 'tobook':
        setMenuStatus('open')
        break
      case 'tobook-close':
        setMenuStatus('close')
        break
      default:
        setMenuStatus('undefined')
        break
    }
  }, [menuOpen])

  if (!isLaptop) {
    return (
      <>
        <ToBookMenuContainer
          data-open={menuStatus}
          className="sc-tobook-menu"
          style={{ fontSize: '14px' }}
        >
          <Divider />
          <a href={`${linksHref.room}`}>{texts.room}</a>
          <Divider />
          <a href={`${linksHref.baba}`}>{texts.baba}</a>
          <Divider />
          <a href={`${linksHref.fishing}`}>{texts.fishing}</a>
          <Divider />
          <a href={`${linksHref.health}`}>{texts.health}</a>
          <Divider />
          <a href={`${linksHref.private}`}>{texts.private}</a>
        </ToBookMenuContainer>
        <S.Wrapper onClick={handleClick}>{texts.book}</S.Wrapper>
      </>
    )
  } else {
    return <></>
  }
}

export default BottomBar
