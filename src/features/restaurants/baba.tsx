import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../../public/assets/images/restaurants/baba/random_1.jpg'
import random2 from '../../../public/assets/images/restaurants/baba/random_2.jpg'
import img0 from '../../../public/assets/images/restaurants/baba/baba_0.png'
import img1 from '../../../public/assets/images/restaurants/baba/baba_1.jpg'
import img3 from '../../../public/assets/images/restaurants/baba/baba_3.jpg'
import img3Mobile from '../../../public/assets/images/restaurants/baba/baba_3_mobile.jpg'
import img4 from '../../../public/assets/images/restaurants/baba/baba_4.jpg'
import img5 from '../../../public/assets/images/restaurants/baba/baba_5.jpg'
import img5Mobile from '../../../public/assets/images/restaurants/baba/baba_4_mobile.jpg'
// import img6 from '../../../public/assets/images/restaurants/baba/baba_6.jpg'
// import img6Mobile from '../../../public/assets/images/restaurants/baba/baba_6_mobile.jpg'
import img1Mobile from '../../../public/assets/images/restaurants/baba/baba_1_mobile.jpg'

import Image from 'next/image'
import Column from '@/components/Column'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { contentsBabaRestaurant } from '@/contents/pages'
import Button from '@/components/Button'
import { BabaRestaurantsPageStyles } from '@/styles/pages/restaurants/baba'
import { IMetaPage } from '@/interfaces'
import Link from 'next/link'
import { LangContext } from '@/stores'
import { useContext } from 'react'
import Languages from '@/enums/languages'

const randomsImages = [random1, random2, random1, random2]
export default function BabaRestaurant(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const { lang } = useContext(LangContext)
  return (
    <>
      <BabaRestaurantsPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main id="baba-restaurant" className={!isLaptop ? 'mobile' : ''}>
        {!isLaptop && <Carrousel images={randomsImages} />}
        <Column
          style={{ width: `${isLaptop ? '90%' : '100%'}` }}
          opt_margin={isLaptop ? [0.5, 1, 1, 1] : [1.5, 1, 2, 1]}
        >
          <Image
            style={{ height: isLaptop ? '38px' : '28px', marginBottom: '8px' }}
            src={img0}
            alt="paysage"
          />
          <Text className="h3">{useText(contentsBabaRestaurant.title)}</Text>
          <Text className="p">{useText(contentsBabaRestaurant.intro)}</Text>
          <Button className="btn">
            <Text>{useText(contentsBabaRestaurant.toBookTable)}</Text>
          </Button>
        </Column>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Image
            style={{ marginBottom: '5%' }}
            className="fullWidth"
            src={img1Mobile}
            alt="paysage"
          />
        )}
        <RowToColumn
          className="section border"
          align={isLaptop ? 'stretch' : 'flex-start'}
          marginForRow={[1, 1, 1, 1]}
          marginForColumn={[0, 1, 1, 1]}
        >
          <Column opt_margin={isLaptop ? [0.5, 0, 0.5, 0] : [2, 0, 2, 0]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter1)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle1)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text1)}</Text>
            <Link href="/pdfs/carte-food-plage-restaurant-baba.pdf">
              <Button className="btn">
                <Text>{useText(contentsBabaRestaurant.menu)}</Text>
              </Button>
            </Link>
          </Column>
          <Column opt_margin={isLaptop ? [0.5, 0, 0.5, 0] : [2, 0, 2, 0]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter2)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle2)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text2)}</Text>
            <Link href="/pdfs/carte-food-plage-restaurant-baba.pdf">
              <Button className="btn">
                <Text>{useText(contentsBabaRestaurant.menu)}</Text>
              </Button>
            </Link>
          </Column>
        </RowToColumn>
        <Image
          className="fullWidth"
          src={isLaptop ? img1 : img5}
          alt="paysage"
        />
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1, 1.5, 0.5, 1.5]}
          marginForColumn={[1.5, 0, 1.5, 0]}
        >
          <Column opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter3)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle3)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text3)}</Text>
            <Link
              href={
                lang === Languages.FR
                  ? '/pdfs/carte-bar-plage-restaurant-baba.pdf'
                  : '/pdfs/card-bar-beach-baba-restaurant.pdf'
              }
            >
              <Button className="btn">
                <Text>{useText(contentsBabaRestaurant.menu)}</Text>
              </Button>
            </Link>
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
              src={isLaptop ? img3 : img3Mobile}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 1.5, 1.5]}
          marginForColumn={[0, 0, 0, 0]}
          isReverseForRow={true}
        >
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [1, 1.5, 2.5, 1.5]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter4)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle4)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text4)}</Text>
            <Link href="/pdfs/baba-glaces.pdf">
              <Button className="btn">
                <Text>{useText(contentsBabaRestaurant.menu)}</Text>
              </Button>
            </Link>
          </Column>
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
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
        {isLaptop && (
          <Image
            style={{ marginBottom: '5%' }}
            className="fullWidth"
            src={isLaptop ? img5 : img5Mobile}
            alt="paysage"
          />
        )}
        {/* <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1, 1.5, 0.5, 1.5]}
          marginForColumn={[1.5, 0, 1.5, 0]}
        >
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [1, 1.5, 2, 1.5]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter5)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle5)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text5)}</Text>
            <Button className="btn">
              <Text>{useText(contentsBabaRestaurant.menu)}</Text>
            </Button>
          </Column>
          <Column opt_alignItems="flex-end" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={isLaptop ? img6 : img6Mobile}
              alt="plage"
            />
          </Column>
        </RowToColumn> */}
      </main>
    </>
  )
}
