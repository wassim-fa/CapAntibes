import Head from 'next/head'
import Text from '@/components/Text'
import { contentsHome } from '@/contents/pages'
import Button from '@/components/Button'
import Column from '@/components/Column'
import Row from '@/components/Row'
import slider0 from '../../public/assets/images/home/slider_0.jpg'
import slider1 from '../../public/assets/images/home/slider_1.jpg'
import img1 from '../../public/assets/images/home/home_1.jpg'
import img1Mobile from '../../public/assets/images/home/home_1_mobile.jpg'
import img2 from '../../public/assets/images/home/home_2.jpg'
import img2Mobile from '../../public/assets/images/home/home_2_mobile.jpg'
import img3 from '../../public/assets/images/home/home_3.jpg'
import img3Mobile from '../../public/assets/images/home/home_3_mobile.jpg'
import img4 from '../../public/assets/images/home/home_4.jpg'
import img4Mobile from '../../public/assets/images/home/home_4_mobile.jpg'
import img5 from '../../public/assets/images/home/home_5.jpg'
import img5Mobile from '../../public/assets/images/home/home_5_mobile.jpg'
import logo3 from '../../public/assets/images/home/logo_3.png'
import random0 from '../../public/assets/images/home/random0.jpg'
import random1 from '../../public/assets/images/home/random1.jpg'
import random2 from '../../public/assets/images/home/random2.jpg'
import random3 from '../../public/assets/images/home/random3.jpg'
import random4 from '../../public/assets/images/home/random4.jpg'
import random5 from '../../public/assets/images/home/random5.jpg'
import random6 from '../../public/assets/images/home/random6.jpg'
import random7 from '../../public/assets/images/home/random7.jpg'
import Image from 'next/image'
import Colors from '@/enums/colors'
import InfinitySlider from '@/components/InfinitySlider'
import { useIsLaptop, useLink, useText } from '@/hooks'
import RandomImages from '@/components/RandomImages'
import RowToColumn from '@/components/RowToColumn'
import Carrousel from '@/components/Carrousel'
import { IndexPageStyles } from '@/styles/pages'
import Link from 'next/link'
import { useCallback, useContext, useEffect, useState } from 'react'
import { MenuContext } from '@/stores'
import { IMetaPage } from '@/interfaces'

const randomsImages = [
  random0,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7
]
export default function Home(meta: IMetaPage) {
  const { menuOpen } = useContext(MenuContext)
  const [isEffectCancelled, setIsEffectCancelled] = useState(true) // useState(false)
  const isLaptop = useIsLaptop()

  const getInfinitySliderImageSize = () => {
    const ratio = (slider0.height / slider0.width) * 100
    let width = 100
    let height = ratio
    if (!isLaptop) {
      width = 100 * 2.7
      height = 2.7 * ratio
    }
    return {
      width,
      height
    }
  }
  const handleScroll = useCallback(() => {
    const height = window.innerHeight - Math.round(window.innerHeight / 20)
    const scrolled = window.pageYOffset
    if (scrolled >= height) {
      setIsEffectCancelled(true)
    }
  }, [])
  useEffect(() => {
    // if (isEffectCancelled) {
    //   return
    // }
    // if (['tobook', 'menu'].includes(menuOpen)) {
    //   setIsEffectCancelled(true)
    // }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll, /*isEffectCancelled,*/ menuOpen])

  return (
    <>
      <IndexPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main id="home" className={!isLaptop ? 'mobile' : ''}>
        {!isEffectCancelled && (
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              backgroundColor: 'white',
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingBottom: `${isLaptop ? '1%' : '5%'}`
            }}
          >
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 1L9.14286 13L1 0.999999"
                stroke="#D99380"
                strokeWidth="2"
              />
            </svg>
          </div>
        )}
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <Column
          opt_margin={isLaptop ? [1, 1, 1, 1] : [3, 1.5, 3, 1.5]}
          opt_width={{ value: isLaptop ? 80 : 100, unit: '%' }}
        >
          <Text className="h3">{useText(contentsHome.title1)}</Text>
          <Text className="p">
            {useText(contentsHome.text1_1)}
            <br />
            {useText(contentsHome.text1_2)}
          </Text>
        </Column>
        <Row>
          <InfinitySlider>
            {[slider0, slider1].map((item) => (
              <Image
                key={item.src}
                src={item}
                alt="liste d'image"
                style={{
                  cursor: 'initial',
                  width: `${getInfinitySliderImageSize().width}vw`,
                  height: `${getInfinitySliderImageSize().height}vw`
                }}
              />
            ))}
          </InfinitySlider>
        </Row>
        <RowToColumn
          align="center"
          marginForRow={[1.1, 2.2, 0, 2.2]}
          marginForColumn={[3, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_alignItems="flex-start"
            opt_margin={isLaptop ? [0, 0, 0, 0] : [0.5, 0, 1.5, 0]}
          >
            <Image
              style={{
                width: `${isLaptop ? '90%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img1 : img1Mobile}
              alt="chambre au bord de l'eau"
            />
          </Column>
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [0.5, 1.5, 2.5, 1.5]}>
            <Text className="h3">{useText(contentsHome.title2)}</Text>
            <Text className="p">{useText(contentsHome.text2)}</Text>
            <Link shallow replace href={useLink('/chambre-et-suites')}>
              <Button className="btn">
                <Text>{useText(contentsHome.btnMoreInformation)}</Text>
              </Button>
            </Link>
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[1, 2.2, 1, 2.2]}
          marginForColumn={[0, 0, 0, 0]}
        >
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [0.5, 1.5, 2.5, 1.5]}>
            <Text className="h3">
              {useText(contentsHome.title3_1)}
              <br />
              {useText(contentsHome.title3_2)}
            </Text>
            <Text className="p">{useText(contentsHome.text3)}</Text>
            <Link shallow replace href={useLink('/restaurant-les-pecheurs')}>
              <Button className="btn">
                <Text>{useText(contentsHome.btnMoreInformation)}</Text>
              </Button>
            </Link>
          </Column>
          <Column
            opt_alignItems="flex-end"
            opt_margin={isLaptop ? [0, 0, 0, 0] : [0.5, 0, 0, 0]}
          >
            <Image
              style={{
                width: `${isLaptop ? '90%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img2 : img2Mobile}
              alt="chambre au bord de l'eau"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="yellow"
          align="center"
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[2, 0, 1, 0]}
          bgColor={Colors.YELLOW}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 1.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Row>
              <Text opt_color={Colors.YELLOW} className="h3">
                {useText(contentsHome.title4_1)}
                <Image
                  className="icon-fish"
                  height={14}
                  src={logo3}
                  alt="logo poisson"
                />
                <br />
                {useText(contentsHome.title4_2)}
              </Text>
            </Row>
            <Text opt_color={Colors.YELLOW} className="p">
              {useText(contentsHome.text4_1)}
              <br />
              {useText(contentsHome.text4_2)}
            </Text>
            <Link shallow replace href={useLink('/restaurant-baba')}>
              <Button opt_color={Colors.YELLOW} className="btn">
                <Text opt_color={Colors.YELLOW}>
                  {useText(contentsHome.btnMoreInformation)}
                </Text>
              </Button>
            </Link>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0.8, 0.2, 0.8] : [0.2, 1, 0.2, 1]}
            opt_alignItems="center"
          >
            <Image
              style={{
                width: `${isLaptop ? '25vw' : '50vw'}`,
                height: 'auto'
              }}
              src={isLaptop ? img3 : img3Mobile}
              alt="chambre au bord de l'eau"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 0, 0]}
          marginForColumn={[2, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_alignItems="center"
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [0.5, 0, 1.5, 0]}
          >
            <Image
              className="fullWidth"
              src={isLaptop ? img4 : img4Mobile}
              alt="chambre au bord de l'eau"
            />
          </Column>
          <Column
            opt_margin={isLaptop ? [0.5, 1.5, 1, 1.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Text className="h3">{useText(contentsHome.title5)}</Text>
            <Text className="p">{useText(contentsHome.text5)}</Text>
            {/* <Link shallow replace href={useLink('/farniente')}>
              <Button className="btn">
                <Text>{useText(contentsHome.btnMoreInformation)}</Text>
              </Button>
            </Link> */}
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0, 2.2, 0.5, 2.2]}
          marginForColumn={[1, 0, 1, 0]}
        >
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [0.5, 1.5, 2.5, 1.5]}>
            <Text className="h3">{useText(contentsHome.title6)}</Text>
            <Text className="p">{useText(contentsHome.text6)}</Text>
            {/* <Link shallow replace href={useLink('/bien-etre')}>
              <Button className="btn">
                <Text>{useText(contentsHome.btnMoreInformation)}</Text>
              </Button>
            </Link> */}
          </Column>
          <Column
            opt_alignItems="flex-end"
            opt_margin={isLaptop ? [0, 0, 0, 0] : [0.5, 0, 0, 0]}
          >
            <Image
              src={isLaptop ? img5 : img5Mobile}
              style={{
                width: `${isLaptop ? '90%' : '100%'}`,
                height: 'auto'
              }}
              alt="chambre au bord de l'eau"
            />
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
