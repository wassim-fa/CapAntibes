import Button from '@/components/Button'
import Row from '@/components/Row'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useLink, useText } from '@/hooks'
import Head from 'next/head'
import slider0 from '../../public/assets/images/farniente/slider_0.png'
import slider1 from '../../public/assets/images/farniente/slider_1.png'
import img1 from '../../public/assets/images/farniente/farniente_1.png'
import img2 from '../../public/assets/images/farniente/farniente_2.png'
import img4 from '../../public/assets/images/farniente/farniente_4.png'
import img5 from '../../public/assets/images/farniente/farniente_5.png'
import img6 from '../../public/assets/images/farniente/farniente_6.png'
import img7 from '../../public/assets/images/farniente/farniente_7.png'
import img8 from '../../public/assets/images/farniente/farniente_8.png'
import random1 from '../../public/assets/images/farniente/random_1.png'
import random2 from '../../public/assets/images/farniente/random_2.png'
import random1Mobile from '../../public/assets/images/farniente/random_1_mobile.png'
import random2Mobile from '../../public/assets/images/farniente/random_2_mobile.png'
import random3Mobile from '../../public/assets/images/farniente/random_3_mobile.png'

import Image from 'next/image'
import Column from '@/components/Column'
import { FarnientePageStyles } from '@/styles/pages/farniente'
import { contentsFarniente } from '@/contents/pages/farniente'
import RandomImages from '@/components/RandomImages'
import Carrousel from '@/components/Carrousel'
import InfinitySlider from '@/components/InfinitySlider'
import Link from 'next/link'
import { IMetaPage } from '@/interfaces'

const randomsImages = [random1, random2, random1, random2]
const randomsImagesMobile = [
  random1Mobile,
  random2Mobile,
  random3Mobile,
  random1Mobile,
  random2Mobile,
  random3Mobile
]
export default function Farniente(meta: IMetaPage) {
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
      <FarnientePageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="farniente" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImagesMobile} />
        )}
        <Column opt_margin={isLaptop ? [1, 1, 2, 1] : [3, 1.5, 1.5, 1.5]}>
          <Text className="h1">{useText(contentsFarniente.title)}</Text>
          <Text className="p">{useText(contentsFarniente.description)}</Text>
        </Column>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}>
            <Text className="h3">{useText(contentsFarniente.subTitle1)}</Text>
            <Text className="p">{useText(contentsFarniente.text1)}</Text>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img1}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img2}
              alt="plage"
            />
          </Column>
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}>
            <Text className="h3">{useText(contentsFarniente.subTitle2)}</Text>
            <Text className="p">{useText(contentsFarniente.text2)}</Text>
          </Column>
        </RowToColumn>
        {isLaptop && (
          <Row opt_margin={[1, 0, 1, 0]}>
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
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}>
            <Text className="h3">{useText(contentsFarniente.subTitle3)}</Text>
            <Text className="p">{useText(contentsFarniente.text3)}</Text>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img4}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img5}
              alt="plage"
            />
          </Column>
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}>
            <Text className="h3">{useText(contentsFarniente.subTitle4)}</Text>
            <Text className="p">{useText(contentsFarniente.text4)}</Text>
            <Link shallow replace href={useLink('/localisation')}>
              <Button className="btn">
                <Text>{useText(contentsFarniente.btn4)}</Text>
              </Button>
            </Link>
          </Column>
        </RowToColumn>
        {isLaptop && (
          <Image
            style={{ marginBottom: '5%' }}
            className="fullWidth"
            src={img6}
            alt="paysage"
          />
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}>
            <Text className="h3">{useText(contentsFarniente.subTitle5)}</Text>
            <Text className="p">{useText(contentsFarniente.text5)}</Text>
            <Button className="btn">
              <Text>{useText(contentsFarniente.btn5)}</Text>
            </Button>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img7}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img8}
              alt="plage"
            />
          </Column>
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}>
            <Text className="h3">{useText(contentsFarniente.subTitle6)}</Text>
            <Text className="p">{useText(contentsFarniente.text6)}</Text>
            <Button className="btn">
              <Text>{useText(contentsFarniente.btn6)}</Text>
            </Button>
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
