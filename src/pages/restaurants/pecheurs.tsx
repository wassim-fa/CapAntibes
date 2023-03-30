import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../../public/assets/images/restaurants/pecheurs/random_1.png'
import random2 from '../../../public/assets/images/restaurants/pecheurs/random_2.png'
import img1 from '../../../public/assets/images/restaurants/pecheurs/pecheurs_1.png'
import img1Mobile from '../../../public/assets/images/restaurants/pecheurs/pecheurs_1_mobile.png'

import Image from 'next/image'
import Column from '@/components/Column'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { contentsPecheursRestaurant } from '@/contents/pages'
import { PecheursRestaurantsPageStyles } from '@/styles/pages/restaurants/pecheurs'

const randomsImages = [random1, random2, random1, random2]
export default function PecheursRestaurant() {
  const isLaptop = useIsLaptop()
  return (
    <>
      <PecheursRestaurantsPageStyles />
      <Head>
        <title>Les pêcheurs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="pecheurs-restaurant" className={!isLaptop ? 'mobile' : ''}>
        {!isLaptop && <Carrousel images={randomsImages} />}
        <Column opt_margin={isLaptop ? [0.5, 1, 1, 1] : [1.5, 1, 2, 1]}>
          <Text className="h3">
            {useText(contentsPecheursRestaurant.title)}
          </Text>
          <Text className="p">{useText(contentsPecheursRestaurant.intro)}</Text>
          <Text className="btn">
            {useText(contentsPecheursRestaurant.toBookTable)}
          </Text>
        </Column>
        {isLaptop && <RandomImages listImages={randomsImages} />}
        <RowToColumn
          className="section border"
          align={isLaptop ? 'stretch' : 'flex-start'}
          marginForRow={[1, 1, 1, 1]}
          marginForColumn={[0, 1, 1, 1]}
        >
          <Column opt_margin={isLaptop ? [0.5, 0, 0.5, 0] : [2, 0, 2, 0]}>
            <Text className="h5">
              {useText(contentsPecheursRestaurant.chapter1)}
            </Text>
            <Text className="h6">
              {useText(contentsPecheursRestaurant.subTitle1)}
            </Text>
            <Text className="p">
              {useText(contentsPecheursRestaurant.text1)}
            </Text>
            <Text className="btn">
              {useText(contentsPecheursRestaurant.menu)}
            </Text>
          </Column>
          <Column
            className="border"
            opt_margin={isLaptop ? [0.5, 0, 0.5, 0] : [2, 0, 2, 0]}
          >
            <Text className="h5">
              {useText(contentsPecheursRestaurant.chapter2)}
            </Text>
            <Text className="h6">
              {useText(contentsPecheursRestaurant.subTitle2)}
            </Text>
            <Text className="p">
              {useText(contentsPecheursRestaurant.text2)}
            </Text>
          </Column>
        </RowToColumn>
        <Image
          style={{ marginBottom: '5%' }}
          className="fullWidth"
          src={isLaptop ? img1 : img1Mobile}
          alt="paysage"
        />
      </main>
    </>
  )
}
