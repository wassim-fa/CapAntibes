import Button from '@/components/Button'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useLink, useText } from '@/hooks'
import Head from 'next/head'
import img1 from '../../../public/assets/images/restaurants/index/restaurants_1.jpg'
import img1Mobile from '../../../public/assets/images/restaurants/index/restaurants_1_mobile.jpg'
import img2 from '../../../public/assets/images/restaurants/index/restaurants_2.jpg'
import img2Mobile from '../../../public/assets/images/restaurants/index/restaurants_2_mobile.jpg'
import img3 from '../../../public/assets/images/restaurants/index/restaurants_3.jpg'
import img3Mobile from '../../../public/assets/images/restaurants/index/restaurants_3_mobile.jpg'
import img4 from '../../../public/assets/images/restaurants/index/restaurants_4.jpg'
import img5 from '../../../public/assets/images/restaurants/index/restaurants_5.jpg'
import img5Mobile from '../../../public/assets/images/restaurants/index/restaurants_5_mobile.jpg'
import img6 from '../../../public/assets/images/restaurants/index/restaurants_6.jpg'
import img6Mobile from '../../../public/assets/images/restaurants/index/restaurants_6_mobile.jpg'
import random1 from '../../../public/assets/images/restaurants/index/random_1.jpg'
import random2 from '../../../public/assets/images/restaurants/index/random_2.jpg'

import Image from 'next/image'
import Column from '@/components/Column'
import { IMetaPage, TCssSize } from '@/interfaces'
import RandomImages from '@/components/RandomImages'
import Carrousel from '@/components/Carrousel'
import { RestaurantsPageStyles } from '@/styles/pages/restaurants'
import { contentsRestaurantsIndex } from '@/contents/pages/restaurants-index'
import Row from '@/components/Row'
import Link from 'next/link'

const randomsImages = [random1, random2, random1, random2]
export default function Restaurants(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const valueSpacing = isLaptop ? 20 : 10
  const spacing: TCssSize = { value: valueSpacing, unit: 'px' }
  return (
    <>
      <RestaurantsPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="restaurants" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <Column
          style={{ width: `${isLaptop ? '70%' : '100%'}` }}
          opt_margin={isLaptop ? [0.5, 1, 1, 1] : [1.5, 1, 2, 1]}
        >
          <Text className="h3 title">
            {useText(contentsRestaurantsIndex.title)}
          </Text>
          <Text className="p">
            {useText(contentsRestaurantsIndex.description)}
          </Text>
          <Button className="btn">
            <Text>{useText(contentsRestaurantsIndex.button)}</Text>
          </Button>
        </Column>
        <Image
          style={{ marginBottom: '2%' }}
          className="fullWidth"
          src={isLaptop ? img1 : img1Mobile}
          alt="paysage"
        />
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1.1, 2.2, 0, 2.2]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
          >
            <Text className="h5">
              {useText(contentsRestaurantsIndex.chapter1)}
            </Text>
            <Text className="h6">
              {useText(contentsRestaurantsIndex.subTitle1)}
            </Text>
            <Text className="p">{useText(contentsRestaurantsIndex.text1)}</Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link
                  shallow
                  replace
                  href={useLink('/restaurant-les-pecheurs')}
                >
                  <Button className="btn">
                    <Text>{useText(contentsRestaurantsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRestaurantsIndex.button)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              style={{
                width: `${isLaptop ? '80%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img2 : img2Mobile}
              alt="chambre de luxe"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0, 2.2, 0.5, 2.2]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img3 : img3Mobile}
              alt="plage"
            />
          </Column>
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
          >
            <Text className="h5">
              {useText(contentsRestaurantsIndex.chapter2)}
            </Text>
            <Text className="h6">
              {useText(contentsRestaurantsIndex.subTitle2)}
            </Text>
            <Text className="p">{useText(contentsRestaurantsIndex.text2)}</Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link shallow replace href={useLink('/restaurant-baba')}>
                  <Button className="btn">
                    <Text>{useText(contentsRestaurantsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRestaurantsIndex.button)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
        </RowToColumn>
        {isLaptop && (
          <Image
            style={{ marginBottom: '2%' }}
            className="fullWidth"
            src={img4}
            alt="paysage"
          />
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1.1, 2.2, 0, 2.2]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
          >
            <Text className="h5">
              {useText(contentsRestaurantsIndex.chapter3)}
            </Text>
            <Text className="h6">
              {useText(contentsRestaurantsIndex.subTitle3)}
            </Text>
            <Text className="p">{useText(contentsRestaurantsIndex.text3)}</Text>
            <Button className="btn">
              <Text>{useText(contentsRestaurantsIndex.menu)}</Text>
            </Button>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              style={{
                width: `${isLaptop ? '80%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img5 : img5Mobile}
              alt="chambre de luxe"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0, 2.2, 0.5, 2.2]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img6 : img6Mobile}
              alt="plage"
            />
          </Column>
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
          >
            <Text className="h5">
              {useText(contentsRestaurantsIndex.chapter4)}
            </Text>
            <Text className="h6">
              {useText(contentsRestaurantsIndex.subTitle4)}
            </Text>
            <Text className="p">{useText(contentsRestaurantsIndex.text4)}</Text>
            <Button className="btn">
              <Text>{useText(contentsRestaurantsIndex.menu)}</Text>
            </Button>
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
