import { contentsLayout } from '@/contents/globals'
import Languages from '@/enums/languages'
import { useIsLaptop, useLink, useText } from '@/hooks'
import { MenuContext } from '@/stores'
import { LangContext } from '@/stores'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import * as S from './styles'
import { urls } from '@/utils'
import { useRouter } from 'next/router'
import Text from '../Text'

const Menu = () => {
  const router = useRouter()
  const { lang, setLang } = useContext(LangContext)
  const { menuOpen } = useContext(MenuContext)
  const [menuStatus, setMenuStatus] = useState<'close' | 'open' | 'undefined'>(
    'undefined'
  )
  const [showItems, setShowItems] = useState<
    null | 'hotel' | 'room' | 'restaurant' | 'farniente'
  >(null)
  const isLaptop = useIsLaptop()
  const labelSize = !isLaptop ? '24px' : '46px'
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
      design: useText(contentsLayout.rooms_design),
      executive: useText(contentsLayout.rooms_executive),
      connecting: useText(contentsLayout.rooms_connecting)
    },
    restaurant: {
      main: useText(contentsLayout.restaurant),
      restau: useText(contentsLayout.restaurant_restaurants),
      fishing: useText(contentsLayout.restaurant_fishing),
      beach: useText(contentsLayout.restaurant_beach)
    },
    farniente: useText(contentsLayout.farniente),
    wellness: useText(contentsLayout.wellness),
    privatization: useText(contentsLayout.privatization)
  }
  const handleLangClick = (lang: Languages) => {
    const newPath = urls.find((item) =>
      [item[Languages.FR], item[Languages.EN], item[Languages.RU]].includes(
        router.route
      )
    )
    if (newPath) {
      router.push(newPath[lang], undefined, { shallow: true })
    }
    setLang(lang)
  }

  const handleClick = (
    value: 'hotel' | 'room' | 'restaurant' | 'farniente'
  ) => {
    const newValue = showItems === value ? null : value
    setShowItems(newValue)
  }

  useEffect(() => {
    switch (menuOpen) {
      case 'menu':
        setMenuStatus('open')
        break
      case 'menu-close':
        setMenuStatus('close')
        break
      default:
        setMenuStatus('undefined')
        break
    }
  }, [menuOpen])

  return (
    <S.Wrapper
      data-open={menuStatus}
      className={`sc-menu ${!isLaptop ? 'mobile' : ''}`}
    >
      <div className="list">
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <div
            onClick={() => handleClick('hotel')}
            style={{ fontSize: labelSize, zIndex: 3 }}
          >
            <p>{texts.hotel.main}</p>
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
              <Link shallow replace href={useLink('/histoire-du-cap')}>
                <div>
                  <p>{texts.hotel.history}</p>
                </div>
              </Link>
              <Link shallow replace href={useLink('/la-galerie')}>
                <div>
                  <p>{texts.hotel.gallery}</p>
                </div>
              </Link>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <Link shallow replace href={useLink('/localisation')}>
                <div>{texts.hotel.localisation}</div>
              </Link>
              <Link shallow replace href={useLink('/la-collection')}>
                <div>{texts.hotel.collection}</div>
              </Link>
            </S.Link>
          </S.SubItem>
        </S.Item>
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <div
            onClick={() => handleClick('hotel')}
            style={{ fontSize: labelSize, zIndex: 3 }}
          >
            <Text className="p test-hover">{texts.hotel.main}</Text>
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
              <Link shallow replace href={useLink('/histoire-du-cap')}>
                <div>
                  <p>{texts.hotel.history}</p>
                </div>
              </Link>
              <Link shallow replace href={useLink('/la-galerie')}>
                <div>
                  <p>{texts.hotel.gallery}</p>
                </div>
              </Link>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <Link shallow replace href={useLink('/localisation')}>
                <div>{texts.hotel.localisation}</div>
              </Link>
              <Link shallow replace href={useLink('/la-collection')}>
                <div>{texts.hotel.collection}</div>
              </Link>
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
              <Link shallow replace href={useLink('/chambre-deluxe')}>
                <div>{texts.rooms.deluxe}</div>
              </Link>
              <Link shallow replace href={useLink('/chambre-privilege')}>
                <div>{texts.rooms.privilege}</div>
              </Link>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <Link
                shallow
                replace
                href={useLink('/chambre-privilege-vue-mer')}
              >
                <div>{texts.rooms.seaview}</div>
              </Link>
              <Link shallow replace href={useLink('/suite')}>
                <div>{texts.rooms.design}</div>
              </Link>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <Link shallow replace href={useLink('/suite-le-cap')}>
                <div>{texts.rooms.executive}</div>
              </Link>
              <Link shallow replace href={useLink('/chambres-communicantes')}>
                <div>{texts.rooms.connecting}</div>
              </Link>
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
              <Link shallow replace href={useLink('/restaurants-bar')}>
                <div>{texts.restaurant.restau}</div>
              </Link>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <Link shallow replace href={useLink('/restaurant-les-pecheurs')}>
                <div>{texts.restaurant.fishing}</div>
              </Link>
            </S.Link>
            <S.Link
              style={{
                flexDirection: isLaptop ? 'row' : 'column'
              }}
            >
              <Link shallow replace href={useLink('/restaurant-baba')}>
                <div>{texts.restaurant.beach}</div>
              </Link>
            </S.Link>
          </S.SubItem>
        </S.Item>
        {/* <S.Item className={!isLaptop ? 'mobile' : ''}>
          <Link shallow replace href={useLink('/farniente')}>
            <div style={{ fontSize: labelSize, zIndex: 3 }}>
              {texts.farniente}
            </div>
          </Link>
        </S.Item>
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <Link shallow replace href={useLink('/bien-etre')}>
            <div style={{ fontSize: labelSize, zIndex: 3 }}>
              {texts.wellness}
            </div>
          </Link>
        </S.Item>
        <S.Item className={!isLaptop ? 'mobile' : ''}>
          <Link shallow replace href={useLink('/privatisation')}>
            <div style={{ fontSize: labelSize, zIndex: 3 }}>
              {texts.privatization}
            </div>
          </Link>
        </S.Item> */}
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
          {/* <div
            className={`${lang === Languages.RU ? 'selected' : ''}`}
            onClick={() => handleLangClick(Languages.RU)}
          >
            {Languages.RU}
          </div> */}
        </div>
      )}
      <Text opt_size={labelSize} className="p test-hover">
        {texts.hotel.main}
      </Text>

      <div onClick={() => handleClick('hotel')} style={{ zIndex: 3 }}>
        <Text opt_size={labelSize} className="p test-hover">
          {texts.hotel.main}
        </Text>
      </div>
      <S.Item className={!isLaptop ? 'mobile' : ''}>
        <div onClick={() => handleClick('hotel')} style={{ zIndex: 3 }}>
          <Text opt_size={labelSize} className="p test-hover">
            {texts.hotel.main}
          </Text>
        </div>
      </S.Item>
    </S.Wrapper>
  )
}

export default Menu
