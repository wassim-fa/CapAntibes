/* eslint-disable prettier/prettier */
import { MenuContext } from '@/stores'
import { useCallback, useContext, useEffect, useState } from 'react'
import * as S from './styles'
import titleLarge from '../../../public/assets/images/global/title_large.svg'
import titleSmall from '../../../public/assets/images/global/title_small.svg'
import Image from 'next/image'
import styled, { keyframes } from 'styled-components'
import { contentsLayout } from '@/contents/globals'
import Divider from '../Divider'
import Languages from '@/enums/languages'
import { useIsHome, useIsLaptop, useText } from '@/hooks'
import { LangContext } from '@/stores'
import { useRouter } from 'next/router'
import { urls } from '@/utils'

const LangMenuContainer = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 60px;
  z-index: 1;
  top: 23px;

  &[data-open='open'] {
    display: flex;
    z-index: 3;
  }
  &[data-open='close'] {
    display: none;
    z-index: 1;
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
    p {
      padding-bottom: 5px;
    }
  }
`
const Lang = () => {
  const router = useRouter()
  const isLaptop = useIsLaptop()
  const { lang, setLang } = useContext(LangContext)
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const [menuStatus, setMenuStatus] = useState<'close' | 'open' | 'undefined'>(
    'undefined'
  )
  const isOpen = menuOpen === 'lang-dropdown'
  const handleBtnClick = () => {
    const value =
      menuOpen === 'lang-dropdown' ? 'lang-dropdown-close' : 'lang-dropdown'
    setMenuOpen(value)
  }
  const handleLangClick = (_lang: Languages) => {
    const newPath = urls.find((item) =>
      [item[Languages.FR], item[Languages.EN], item[Languages.RU]].includes(
        router.route
      )
    )
    if (newPath) {
      router.push(newPath[_lang], undefined, { shallow: true })
    }
    setLang(_lang)
    handleBtnClick()
  }

  useEffect(() => {
    switch (menuOpen) {
      case 'lang-dropdown':
        setMenuStatus('open')
        break
      case 'lang-dropdown-close':
        setMenuStatus('close')
        break
      default:
        setMenuStatus('undefined')
        break
    }
  }, [menuOpen])
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
            style={{ display: `${isOpen ? 'none' : 'initial'}` }}
            strokeWidth="2"
          />
        </svg>
      </div>
      <LangMenuContainer
        data-open={menuStatus}
        className="sc-lang-menu"
        style={{ fontSize: '14px', cursor: isLaptop ? 'pointer' : 'auto' }}
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
        {/* {lang !== Languages.RU && (
          <>
            <Divider />
            <div onClick={() => handleLangClick(Languages.RU)}>
              {Languages.RU}
            </div>
          </>
        )} */}
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

  &[data-open='open'] {
    display: flex;
  }
  &[data-open='close'] {
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
  const isLaptop = useIsLaptop()
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const [menuStatus, setMenuStatus] = useState<'close' | 'open' | 'undefined'>(
    'undefined'
  )
  const handleClick = () => {
    const value =
      menuOpen === 'tobook-dropdown'
        ? 'tobook-dropdown-close'
        : 'tobook-dropdown'
    setMenuOpen(value)
  }
  const linksHref = {
    room: useText(contentsLayout.linkRoom),
    baba: useText(contentsLayout.linkBaba),
    fishing: useText(contentsLayout.linkFishing),
    health: useText(contentsLayout.linkHealth),
    private: useText(contentsLayout.linkPrivate)
  }
  const texts = {
    book: useText(contentsLayout.book),
    room: useText(contentsLayout.room),
    baba: useText(contentsLayout.baba),
    fishing: useText(contentsLayout.fishing),
    health: useText(contentsLayout.health),
    private: useText(contentsLayout.private)
  }
  useEffect(() => {
    switch (menuOpen) {
      case 'tobook-dropdown':
        setMenuStatus('open')
        break
      case 'tobook-dropdown-close':
        setMenuStatus('close')
        break
      default:
        setMenuStatus('undefined')
        break
    }
  }, [menuOpen])

  return (
    <ToBookContainer
      className="tobook"
      style={{ fontSize: '14px', cursor: isLaptop ? 'pointer' : 'auto' }}
    >
      <div className="btn" onClick={handleClick}>
        {texts.book}
      </div>
      <ToBookMenuContainer
        data-open={menuStatus}
        className="sc-tobook-dropdown"
        style={{ fontSize: '14px', cursor: isLaptop ? 'pointer' : 'auto' }}
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
  cursor: auto;
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

  > *:first-child {
    opacity: 1;
  }
  > *:last-child {
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
  &.small {
    > * {
      top: 0;
      right: 10px;
      object-fit: cover;
      width: auto;
      height: 70%;
    }
  }
`
const Burger = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const isLaptop = useIsLaptop()
  const isMenuOpen = menuOpen === 'menu'
  const handleMenuClick = () => {
    const value = menuOpen === 'menu' ? 'menu-close' : 'menu'
    setMenuOpen(value)
  }
  return (
    <BurgerContainer
      className={`burger-btn ${isLaptop ? '' : 'small'}`}
      onClick={handleMenuClick}
      data-isopen={isMenuOpen}
    >
      <svg
        width="36"
        height="24"
        viewBox="0 0 36 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1.92307H36M0 12.3077H36M0 22.6923H36"
          stroke="#D99B81"
          strokeWidth="2"
        />
      </svg>
      <svg
        width="29"
        height="29"
        viewBox="0 0 29 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1L27.5 27.5" stroke="#D99B81" strokeWidth="2" />
        <path d="M27.5 1L0.999999 27.5" stroke="#D99B81" strokeWidth="2" />
      </svg>
    </BurgerContainer>
  )
}
const Navbar = () => {
  const router = useRouter()
  const isHome = useIsHome()
  const isLaptop = useIsLaptop()

  const title = isLaptop ? titleLarge : titleSmall
  const init = {
    scale: isHome ? 2 : 1,
    translate: isHome ? 45 : 0
  }

  const { menuOpen, setMenuOpen } = useContext(MenuContext)
  const [isEffectCancelled, setIsEffectCancelled] = useState(true) // useState(!isHome)
  const [scale, setScale] = useState(init.scale)
  const [translate, setTranslate] = useState(init.translate)

  const handleScroll = useCallback(() => {
    if (isHome) {
      const height = window.innerHeight - Math.round(window.innerHeight / 20)
      const scrolled = window.pageYOffset
      if (scrolled >= height) {
        setIsEffectCancelled(true)
      } else {
        const percentage = 1 - scrolled / height
        const scaleFactor = Math.max(2 - (2 - 1) * (1 - percentage), 1)
        const translateFactor = Math.max(45 - 45 * (1 - percentage), 0)
        setScale(scaleFactor)
        setTranslate(translateFactor)
      }
    }
  }, [isHome])
  useEffect(() => {
    // setIsEffectCancelled(false)
    setMenuOpen('none')
    handleScroll()
  }, [router.asPath, setMenuOpen, setIsEffectCancelled, handleScroll])

  useEffect(() => {
    // if (isEffectCancelled) {
    //   return
    // }
    // if (['tobook', 'menu'].includes(menuOpen)) {
    //   setIsEffectCancelled(true)
    // }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, menuOpen])
  return (
    <S.Wrapper className={`sc-navbar ${isLaptop ? '' : 'mobile'}`}>
      <S.Part flex={1} align={'flex-start'}>
        {isLaptop && <Lang />}
      </S.Part>
      <S.Part flex={2} align={'center'}>
        <Image
          onClick={() => router.push('/', undefined, { shallow: true })}
          data-islarge={isLaptop}
          src={title}
          style={{
            cursor: isLaptop ? 'pointer' : 'auto',
            transform: `translateY(${
              isEffectCancelled ? 0 : translate
            }vh) scale(${isEffectCancelled ? 1 : scale})`
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
