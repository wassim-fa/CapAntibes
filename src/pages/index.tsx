import Head from 'next/head'
import Text from '@/components/Text'
import { contentsHome } from '@/contents/pages'
import Button from '@/components/Button'
import Column from '@/components/Column'
import { getFontSize } from '@/utils'
import Row from '@/components/Row'
import slider0 from '../../public/assets/images/home/slider_0.png'
import slider1 from '../../public/assets/images/home/slider_1.png'
import img1 from '../../public/assets/images/home/home_1.png'
import img2 from '../../public/assets/images/home/home_2.png'
import img3 from '../../public/assets/images/home/home_3.png'
import img4 from '../../public/assets/images/home/home_4.png'
import logo3 from '../../public/assets/images/home/logo_3.png'
import Image from 'next/image'
import Colors from '@/enums/colors'
import { TCssSize } from '@/interfaces'
import InfinitySlider from '@/components/InfinitySlider'
import { useIsLaptop, useIsMobile, useText } from '@/hooks'
import RandomImages from '@/components/RandomImages'
import RowToColumn from '@/components/RowToColumn'
import { createGlobalStyle } from 'styled-components'
import Carrousel from '@/components/Carrousel'

const IndexPageStyles = createGlobalStyle`
  .mobile {}
`

export default function Home() {
  const isMobile = useIsMobile()
  const isLaptop = useIsLaptop()
  const fontSizeLaptop = {
    regular: {
      current: '1.25vw',
      middle: 20
    },
    small: {
      current: '1.05vw',
      middle: 18
    }
  }
  const fontSizeMobile = {
    regular: {
      current: '2.2vw',
      middle: 18
    },
    small: {
      current: '2.2vw',
      middle: 10
    }
  }
  const spacing: TCssSize = { value: 0.8, unit: 'vw' }
  const fontSize = isMobile ? fontSizeMobile : fontSizeLaptop
  const fontRegular = getFontSize(
    fontSize.regular.current,
    fontSize.regular.middle
  )
  const fontSmall = getFontSize(fontSize.small.current, fontSize.small.middle)

  const getInfinitySliderImageSize = () => {
    const ratio = (slider0.height / slider0.width) * 100
    let width = 100
    let height = ratio
    if (!isLaptop) {
      width = 200
      height = 2 * ratio
    }
    return {
      width,
      height
    }
  }
  return (
    <>
      <IndexPageStyles />
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
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
        {isLaptop ? <RandomImages /> : <Carrousel /> }
        <Column
          opt_margin={isLaptop ? [1, 1, 1, 1] : [0.5, 0.5, 0.5, 0.5]}
          opt_spacing={spacing}
          opt_width={{ value: 90, unit: '%' }}
        >
          <Text opt_size={fontRegular}>{useText(contentsHome.text1)}</Text>
          <Button>
            <Text opt_size={fontSmall}>
              {useText(contentsHome.btnMoreInformation)}
            </Text>
          </Button>
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
        <Column
          opt_margin={isLaptop ? [1, 1, 1, 1] : [0.5, 0.5, 0.5, 0.5]}
          opt_spacing={spacing}
          opt_width={{ value: 90, unit: '%' }}
        >
          <Text opt_size={fontRegular}>{useText(contentsHome.text2)}</Text>
          <Button>
            <Text opt_size={fontSmall}>
              {useText(contentsHome.btnMoreInformation)}
            </Text>
          </Button>
        </Column>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 0.5, 0]}
          marginForColumn={[1, 0, 1, 0]}
        >
          <Image
            className="fullWidth"
            src={img1}
            alt="chambre au bord de l'eau"
          />
          <Column opt_margin={[0.5, 0.5, 1, 0.5]} opt_spacing={spacing}>
            <Text opt_size={fontRegular}>{useText(contentsHome.text3)}</Text>
            <Button>
              <Text opt_size={fontSmall}>
                {useText(contentsHome.btnMoreInformation)}
              </Text>
            </Button>
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 0.5, 0]}
          marginForColumn={[1, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_margin={[0.5, 0.5, 1, 0.5]} opt_spacing={spacing}>
            <Text opt_size={fontRegular}>{useText(contentsHome.text4)}</Text>
            <Button>
              <Text opt_size={fontSmall}>
                {useText(contentsHome.btnMoreInformation)}
              </Text>
            </Button>
          </Column>
          <Image
            className="fullWidth"
            src={img2}
            alt="chambre au bord de l'eau"
          />
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 0.5, 0]}
          marginForColumn={[1, 0, 1, 0]}
          bgColor={Colors.YELLOW}
        >
          <Column opt_margin={[0.5, 0.5, 1, 0.5]} opt_spacing={spacing}>
            <Image
              style={{
                width: `20%`,
                height: 'auto'
              }}
              src={logo3}
              alt="logo poisson"
            />
            <Text opt_size={fontRegular} opt_color={Colors.YELLOW}>
              {useText(contentsHome.text5)}
            </Text>
            <Button opt_color={Colors.YELLOW}>
              <Text opt_size={fontSmall} opt_color={Colors.YELLOW}>
                {useText(contentsHome.btnMoreInformation)}
              </Text>
            </Button>
          </Column>
          <Column opt_margin={[0.2, 1, 0.2, 1]} opt_alignItems="center">
            <Image
              style={{
                width: `${isLaptop ? '25vw' : '50vw'}`,
                height: 'auto'
              }}
              src={img3}
              alt="chambre au bord de l'eau"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 1, 0]}
          marginForColumn={[1, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Image
            className="fullWidth"
            src={img4}
            alt="chambre au bord de l'eau"
          />
          <Column
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 0.5, 1.5, 0.5]}
            opt_spacing={spacing}
          >
            <Text opt_size={fontRegular}>{useText(contentsHome.text6)}</Text>
            <Button>
              <Text opt_size={fontSmall}>
                {useText(contentsHome.btnMoreInformation)}
              </Text>
            </Button>
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
