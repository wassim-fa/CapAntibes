import Head from 'next/head'
import Text from '@/components/Text'
import { contentsHome } from '@/contents/pages'
import Button from '@/components/Button'
import Column from '@/components/Column'
import Row from '@/components/Row'
import slider0 from '../../public/assets/images/home/slider_0.png'
import slider1 from '../../public/assets/images/home/slider_1.png'
import img1 from '../../public/assets/images/home/home_1.png'
import img2 from '../../public/assets/images/home/home_2.png'
import img3 from '../../public/assets/images/home/home_3.png'
import img4 from '../../public/assets/images/home/home_4.png'
import logo3 from '../../public/assets/images/home/logo_3.png'
import random0 from '../../public/assets/images/home/random0.png'
import random1 from '../../public/assets/images/home/random1.png'
import random2 from '../../public/assets/images/home/random2.png'
import random3 from '../../public/assets/images/home/random3.png'
import random4 from '../../public/assets/images/home/random4.png'
import random5 from '../../public/assets/images/home/random5.png'
import random6 from '../../public/assets/images/home/random6.png'
import random7 from '../../public/assets/images/home/random7.png'
import Image from 'next/image'
import Colors from '@/enums/colors'
import InfinitySlider from '@/components/InfinitySlider'
import { useIsLaptop, useText } from '@/hooks'
import RandomImages from '@/components/RandomImages'
import RowToColumn from '@/components/RowToColumn'
import Carrousel from '@/components/Carrousel'
import { IndexPageStyles } from '@/styles/pages'

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
export default function Home() {
  const isLaptop = useIsLaptop()

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
      <main id="home" className={!isLaptop ? 'mobile' : ''}>
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
          <Button className="btn">
            <Text>{useText(contentsHome.btnMoreInformation)}</Text>
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
        <RowToColumn
          align="center"
          marginForRow={[0.5, 2, 0.5, 2]}
          marginForColumn={[3, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_alignItems="center"
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 0, 1.5, 0]}
          >
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={img1}
              alt="chambre au bord de l'eau"
            />
          </Column>
          <Column
            className=""
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Text className="h3">{useText(contentsHome.title2)}</Text>
            <Text className="p">{useText(contentsHome.text2)}</Text>
            <Button className="btn">
              <Text>{useText(contentsHome.btnMoreInformation)}</Text>
            </Button>
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 2, 0.5, 2]}
          marginForColumn={[0, 0, 0, 0]}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Text className="h3">
              {useText(contentsHome.title3_1)}
              <br />
              {useText(contentsHome.title3_2)}
            </Text>
            <Text className="p">{useText(contentsHome.text3)}</Text>
            <Button className="btn">
              <Text>{useText(contentsHome.btnMoreInformation)}</Text>
            </Button>
          </Column>
          <Column
            opt_alignItems="center"
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 0, 0, 0]}
          >
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={img2}
              alt="chambre au bord de l'eau"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
        className='yellow'
          align="center"
          marginForRow={[0.5, 2, 0.5, 2]}
          marginForColumn={[2, 0, 1, 0]}
          bgColor={Colors.YELLOW}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Row>
              <Text opt_color={Colors.YELLOW} className="h3">
                {useText(contentsHome.title4_1)}
                <Image height={14} src={logo3} alt="logo poisson" />
                <br />
                {useText(contentsHome.title4_2)}
              </Text>
            </Row>
            <Text opt_color={Colors.YELLOW} className="p">
              {useText(contentsHome.text4_1)}
              <br />
              {useText(contentsHome.text4_2)}
            </Text>
            <Button opt_color={Colors.YELLOW} className="btn">
              <Text opt_color={Colors.YELLOW}>
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
          marginForColumn={[2, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_alignItems="center"
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [0.5, 0, 1.5, 0]}
          >
            <Image
              className="fullWidth"
              src={img4}
              alt="chambre au bord de l'eau"
            />
          </Column>
          <Column
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Text className="h3">{useText(contentsHome.title5)}</Text>
            <Text className="p">{useText(contentsHome.text5)}</Text>
            <Button className="btn">
              <Text>{useText(contentsHome.btnMoreInformation)}</Text>
            </Button>
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 2, 0.5, 2]}
          marginForColumn={[1, 0, 1, 0]}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 1.5, 2.5, 1.5]}
          >
            <Text className="h3">{useText(contentsHome.title6)}</Text>
            <Text className="p">{useText(contentsHome.text6)}</Text>
            <Button className="btn">
              <Text>{useText(contentsHome.btnMoreInformation)}</Text>
            </Button>
          </Column>
          <Column
            opt_alignItems="center"
            opt_margin={isLaptop ? [0.5, 0.5, 1, 0.5] : [0.5, 0, 1.5, 0]}
          >
            <Image
              src={img2}
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
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
