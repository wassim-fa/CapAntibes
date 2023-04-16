import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../../public/assets/images/restaurants/baba/random_1.png'
import random2 from '../../../public/assets/images/restaurants/baba/random_2.png'
import img0 from '../../../public/assets/images/restaurants/baba/baba_0.png'
import img1 from '../../../public/assets/images/restaurants/baba/baba_1.png'
import img3 from '../../../public/assets/images/restaurants/baba/baba_3.png'
import img4 from '../../../public/assets/images/restaurants/baba/baba_4.png'
import img5 from '../../../public/assets/images/restaurants/baba/baba_5.png'
import img6 from '../../../public/assets/images/restaurants/baba/baba_6.png'
import img1Mobile from '../../../public/assets/images/restaurants/baba/baba_1_mobile.png'

import Image from 'next/image'
import Column from '@/components/Column'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { contentsBabaRestaurant } from '@/contents/pages'
import Button from '@/components/Button'
import { BabaRestaurantsPageStyles } from '@/styles/pages/restaurants/baba'

const randomsImages = [random1, random2, random1, random2]
export default function BabaRestaurant() {
  const isLaptop = useIsLaptop()
  return (
    <>
      <BabaRestaurantsPageStyles />
      <Head>
        <title>Les pêcheurs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="baba-restaurant" className={!isLaptop ? 'mobile' : ''}>
        {!isLaptop && <Carrousel images={randomsImages} />}
        <Column opt_margin={isLaptop ? [0.5, 1, 1, 1] : [1.5, 1, 2, 1]}>
          <Image
            style={{ height: isLaptop ? '38px' : '28px' }}
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
            <Button className="btn">
              <Text>{useText(contentsBabaRestaurant.menu)}</Text>
            </Button>
          </Column>
          <Column opt_margin={isLaptop ? [0.5, 0, 0.5, 0] : [2, 0, 2, 0]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter2)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle2)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text2)}</Text>
            <Button className="btn">
              <Text>{useText(contentsBabaRestaurant.menu)}</Text>
            </Button>
          </Column>
        </RowToColumn>
        <Image
          style={{ marginBottom: '5%' }}
          className="fullWidth"
          src={isLaptop ? img1 : img5}
          alt="paysage"
        />
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1, 0, 0.5, 0]}
          marginForColumn={[1.5, 0, 1.5, 0]}
        >
          <Column opt_margin={isLaptop ? [0, 0.5, 0, 1.5] : [1, 1.5, 2, 1.5]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter3)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle3)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text3)}</Text>
            <Button className="btn">
              <Text>{useText(contentsBabaRestaurant.menu)}</Text>
            </Button>
          </Column>
          <Column opt_alignItems="center" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={img3}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 0, 1.5, 0]}
          marginForColumn={[0, 0, 0, 0]}
          isReverseForRow={true}
        >
          <Column opt_margin={isLaptop ? [0, 1.5, 0, 0.5] : [1, 1.5, 2.5, 1.5]}>
            <Text className="h5">
              {useText(contentsBabaRestaurant.chapter4)}
            </Text>
            <Text className="h6">
              {useText(contentsBabaRestaurant.subTitle4)}
            </Text>
            <Text className="p">{useText(contentsBabaRestaurant.text4)}</Text>
            <Button className="btn">
              <Text>{useText(contentsBabaRestaurant.menu)}</Text>
            </Button>
          </Column>
          <Column opt_alignItems="center" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
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
            src={img5}
            alt="paysage"
          />
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1, 0, 0.5, 0]}
          marginForColumn={[1.5, 0, 1.5, 0]}
        >
          <Column opt_margin={isLaptop ? [0, 0.5, 0, 1.5] : [1, 1.5, 2, 1.5]}>
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
          <Column opt_alignItems="center" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={img6}
              alt="plage"
            />
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}