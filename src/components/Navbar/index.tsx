import { BookMenuContext, MenuContext } from '@/stores'
import { useCallback, useContext, useEffect, useState } from 'react'
import * as S from './styles'
import titleLarge from '../../../public/assets/images/global/title_large.png'
import titleSmall from '../../../public/assets/images/global/title_small.png'
import burger from '../../../public/assets/images/global/burger.png'
import close from '../../../public/assets/images/global/close.png'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import { contentsLayout } from '@/contents/globals'
import Divider from '../Divider'
import Languages from '@/enums/languages'
import { useIsHome, useIsLaptop, useText } from '@/hooks'
import { LangContext } from '@/stores'
import Link from 'next/link'
import { useRouter } from 'next/router'

const LangMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  z-index: 1;
  top: 23px;

  &[data-open='true'] {
    display: flex;
  }
  &[data-open='false'] {
    display: none;
  }

  background-color: white;
  padding: 10px 15px;

  > * {
    margin: 10% 0;
    width: 110%;
    text-align: center;
  }
`
const LangContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  background-color: white;
  width: fit-content;
  height: fit-content;
  text-align: center;
  .btn {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
`
const Lang = () => {
  const { lang, setLang } = useContext(LangContext)
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const handleBtnClick = () => {
    setIsOpen(!isOpen)
  }
  const handleLangClick = (_lang: Languages) => {
    setLang(_lang)
    handleBtnClick()
  }
  return (
    <LangContainer
      className="tobook"
      style={{ fontSize: '14px', cursor: 'pointer' }}
    >
      <div className="btn" onClick={handleBtnClick}>
        <p>{lang}</p>
        <svg
          width="16"
          height="13"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 0.999939L8 10.9999L11.5 5.99994L15 0.999939"
            stroke="#D99380"
            style={{ opacity: `${isOpen ? 0 : 1}` }}
            strokeWidth="2"
          />
        </svg>
      </div>
      <LangMenuContainer
        data-open={isOpen}
        className="sc-lang-menu"
        style={{ fontSize: '14px', cursor: 'pointer' }}
      >
        {lang !== Languages.FR && (
          <>
            <Divider />
            <div onClick={() => handleLangClick(Languages.FR)}>
              {Languages.FR}
            </div>
          </>
        )}
        {lang !== Languages.EN && (
          <>
            <Divider />
            <div onClick={() => handleLangClick(Languages.EN)}>
              {Languages.EN}
            </div>
          </>
        )}
        {lang !== Languages.RU && (
          <>
            <Divider />
            <div onClick={() => handleLangClick(Languages.RU)}>
              {Languages.RU}
            </div>
          </>
        )}
      </LangMenuContainer>
    </LangContainer>
  )
}
const ToBookMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  width: 250px;
  z-index: 1;

  &[data-open='true'] {
    display: flex;
  }
  &[data-open='false'] {
    display: none;
  }

  background-color: white;
  padding: 10px 15px;

  > * {
    margin: 1% 0;
    width: 110%;
    text-align: center;
  }
`
const ToBookContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 3;
  background-color: white;
  width: fit-content;
  height: fit-content;
  text-align: center;
  .btn {
    position: relative;
    z-index: 3;
    width: 250px;
    height: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.bgColors.primary};
  }
`
const ToBook = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const texts = {
    book: useText(contentsLayout.book),
    room: useText(contentsLayout.room),
    baba: useText(contentsLayout.baba),
    fishing: useText(contentsLayout.fishing),
    health: useText(contentsLayout.health),
    private: useText(contentsLayout.private)
  }
  return (
    <ToBookContainer
      className="tobook"
      style={{ fontSize: '14px', cursor: 'pointer' }}
    >
      <div className="btn" onClick={handleClick}>
        {texts.book}
      </div>
      <ToBookMenuContainer
        data-open={isOpen}
        className="sc-tobook-dropdown"
        style={{ fontSize: '14px', cursor: 'pointer' }}
      >
        <Divider />
        <div>{texts.room}</div>
        <Divider />
        <div>{texts.baba}</div>
        <Divider />
        <div>{texts.fishing}</div>
        <Divider />
        <div>{texts.health}</div>
        <Divider />
        <div>{texts.private}</div>
      </ToBookMenuContainer>
    </ToBookContainer>
  )
}

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
const BurgerContainer = styled.div`
  position: relative;
  cursor: pointer;
  height: 25px;
  width: 50px;

  > * {
    position: absolute;
    top: 0;
    right: 0;
    object-fit: cover;
    width: auto;
    height: 100%;
  }

  *:first-child {
    opacity: 1;
  }
  *:last-child {
    opacity: 0;
  }

  &[data-isopen='false'] > * {
    :first-child {
      animation: ${fadeIn} 0.2s forwards ease-in-out;
    }
    :last-child {
      animation: ${fadeOut} 0.2s forwards ease-in-out;
    }
  }
  &[data-isopen='true'] > * {
    :first-child {
      animation: ${fadeOut} 0.2s forwards ease-in-out;
    }
    :last-child {
      animation: ${fadeIn} 0.2s forwards ease-in-out;
    }
  }
`
const Burger = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  const handleMenuClick = () => {
    const value = !isMenuOpen
    setIsMenuOpen(value)
  }
  return (
    <BurgerContainer
      className={'burger-btn'}
      onClick={handleMenuClick}
      data-isopen={isMenuOpen}
    >
      <Image src={burger} alt="bouton burger" />
      <Image src={close} alt="bouton de fermeture" />
    </BurgerContainer>
  )
}
const Navbar = () => {
  const router = useRouter()
  const { isBookMenuOpen } = useContext(BookMenuContext)
  const { isMenuOpen } = useContext(MenuContext)
  const isLaptop = useIsLaptop()
  const isHome = useIsHome()
  const title = isLaptop ? titleLarge : titleSmall
  const init = {
    scale: isHome ? 2 : 1,
    translate: isHome ? 45 : 0
  }
  const [scale, setScale] = useState(init.scale)
  const [translate, setTranslate] = useState(init.translate)
  const cancelEffect = isBookMenuOpen || isMenuOpen

  const handleScroll = useCallback(() => {
    if (isHome) {
      const height = window.innerHeight - Math.round(window.innerHeight / 20)
      const scrolled = window.pageYOffset
      const percentage = 1 - scrolled / height
      const scaleFactor = Math.max(2 - (2 - 1) * (1 - percentage), 1)
      const translateFactor = Math.max(45 - 45 * (1 - percentage), 0)
      setScale(scaleFactor)
      setTranslate(translateFactor)
    }
  }, [isHome])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return (
    <S.Wrapper className={`sc-navbar ${isLaptop ? '' : 'mobile'}`}>
      <S.Part flex={1} align={'flex-start'}>
        {isLaptop && <Lang />}
      </S.Part>
      <S.Part flex={2} align={'center'}>
        <Image
          onClick={() => router.push('/')}
          data-islarge={isLaptop}
          src={title}
          style={{
            cursor: 'pointer',
            transform: `translateY(${cancelEffect ? 0 : translate}vh) scale(${cancelEffect ? 1 : scale
              })`
          }}
          alt="Cap d'antibes - beach hotel"
        />
      </S.Part>
      <S.Part flex={1} align={'flex-end'}>
        {isLaptop && <ToBook />}
        <Burger />
      </S.Part>
    </S.Wrapper>
  )
}

export default Navbar
