import { contentsLayout } from '@/contents/globals'
import Languages from '@/enums/languages'
import { useIsLaptop, useText } from '@/hooks'
import { MenuContext } from '@/stores'
import { LangContext } from '@/stores'
import Link from 'next/link'
import { useContext, useState } from 'react'
import * as S from './styles'

const Menu = () => {
  const { lang, setLang } = useContext(LangContext)
  const { isMenuOpen } = useContext(MenuContext)
  const [showItems, setShowItems] = useState<
    null | 'hotel' | 'room' | 'restaurant' | 'farniente'
  >(null)
  const isLaptop = useIsLaptop()
  const labelSize = !isLaptop ? '25px' : '56px'
  const linkSize = !isLaptop ? '15px' : '29px'

  const texts = {
    hotel: {
      main: useText(contentsLayout.hotel),
      history: useText(contentsLayout.hotel_history),
      gallery: useText(contentsLayout.hotel_gallery),
      localisation: useText(contentsLayout.hotel_localisation),
      collection: useText(contentsLayout.hotel_collection)
    },
    rooms: {
      main: useText(contentsLayout.rooms),
      deluxe: useText(contentsLayout.rooms_deluxe),
      privilege: useText(contentsLayout.rooms_privilege),
      seaview: useText(contentsLayout.rooms_seaview),
      design: useText(contentsLayout.rooms_design)
    },
    restaurant: {
      main: useText(contentsLayout.restaurant),
      fishing: useText(contentsLayout.restaurant_fishing),
      beach: useText(contentsLayout.restaurant_beach),
      baba: useText(contentsLayout.restaurant_baba)
    },
    farniente: {
      main: useText(contentsLayout.farniente),
      beach: useText(contentsLayout.farniente_beach),
      health: useText(contentsLayout.farniente_health),
      jardin: useText(contentsLayout.farniente_jardin),
      rent: useText(contentsLayout.farniente_rent),
      family: useText(contentsLayout.farniente_family),
      private: useText(contentsLayout.farniente_private)
    }
  }
  const handleLangClick = (lang: Languages) => {
    setLang(lang)
  }

  const handleClick = (
    value: 'hotel' | 'room' | 'restaurant' | 'farniente'
  ) => {
    const newValue = showItems === value ? null : value
    setShowItems(newValue)
  }

  return (
    <S.Wrapper
      data-open={isMenuOpen}
      className={`sc-menu ${!isLaptop ? 'mobile' : ''}`}
    >
      <div className="list">
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <div
            onClick={() => handleClick('hotel')}
            style={{ fontSize: labelSize, zIndex: 3 }}
          >
            {texts.hotel.main}
          </div>
          <S.SubItem
            className={`${showItems === 'hotel' ? 'active' : ''}`}
            style={{ fontSize: linkSize }}
          >
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div>{texts.hotel.history}</div>
              <div>{texts.hotel.gallery}</div>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div>{texts.hotel.localisation}</div>
              <div>{texts.hotel.collection}</div>
            </S.Link>
          </S.SubItem>
        </S.Item>
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <div
            onClick={() => handleClick('room')}
            style={{ fontSize: labelSize, zIndex: 3 }}
          >
            {texts.rooms.main}
          </div>
          <S.SubItem
            className={`${showItems === 'room' ? 'active' : ''}`}
            style={{ fontSize: linkSize }}
          >
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div><Link href='/rooms/luxe'>{texts.rooms.deluxe}</Link></div>
              <div><Link href='/rooms/privilege'>{texts.rooms.privilege}</Link></div>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div><Link href='/rooms/seaview'>{texts.rooms.seaview}</Link></div>
              <div><Link href='/rooms/design'>{texts.rooms.design}</Link></div>
            </S.Link>
          </S.SubItem>
        </S.Item>
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <div
            onClick={() => handleClick('restaurant')}
            style={{ fontSize: labelSize, zIndex: 3 }}
          >
            {texts.restaurant.main}
          </div>
          <S.SubItem
            className={`${showItems === 'restaurant' ? 'active' : ''}`}
            style={{ fontSize: linkSize }}
          >
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div>{texts.restaurant.fishing}</div>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div>{texts.restaurant.beach}</div>
              <div>{texts.restaurant.baba}</div>
            </S.Link>
          </S.SubItem>
        </S.Item>
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <div
            onClick={() => handleClick('farniente')}
            style={{ fontSize: labelSize, zIndex: 3 }}
          >
            {texts.farniente.main}
          </div>
          <S.SubItem
            className={`${showItems === 'farniente' ? 'active' : ''}`}
            style={{ fontSize: linkSize }}
          >
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div>{texts.farniente.beach}</div>
              <div>{texts.farniente.health}</div>
              <div>{texts.farniente.jardin}</div>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <div>{texts.farniente.rent}</div>
              <div>{texts.farniente.family}</div>
              <div>{texts.farniente.private}</div>
            </S.Link>
          </S.SubItem>
        </S.Item>
      </div>
      {!isLaptop && (
        <div className="lang">
          <div
            className={`${lang === Languages.FR ? 'selected' : ''}`}
            onClick={() => handleLangClick(Languages.FR)}
          >
            {Languages.FR}
          </div>
          <div
            className={`${lang === Languages.EN ? 'selected' : ''}`}
            onClick={() => handleLangClick(Languages.EN)}
          >
            {Languages.EN}
          </div>
          <div
            className={`${lang === Languages.RU ? 'selected' : ''}`}
            onClick={() => handleLangClick(Languages.RU)}
          >
            {Languages.RU}
          </div>
        </div>
      )}
    </S.Wrapper>
  )
}

export default Menu
