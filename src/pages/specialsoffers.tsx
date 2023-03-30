import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../public/assets/images/specials_offers/random_1.png'
import random2 from '../../public/assets/images/specials_offers/random_2.png'
import img1 from '../../public/assets/images/specials_offers/specials_offers_1.png'

import Image from 'next/image'
import Column from '@/components/Column'
import Button from '@/components/Button'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { SpecialsOffersPageStyles } from '@/styles/pages/specials_offers'
import { contentsSpecialsOffers } from '@/contents/pages/specials_offers'

const randomsImages = [random1, random2]
export default function SpecialsOffers() {
  const isLaptop = useIsLaptop()
  return (
    <>
      <SpecialsOffersPageStyles />
      <Head>
        <title>Offres Spacials</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="specials-offers" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0, 1, 1, 1]}
          marginForColumn={[2, 1, 1, 1]}
          isReverseForColumn={true}
        >
          <Column opt_margin={isLaptop ? [0.5, 0.5, 0, 0] : [1, 0, 2, 0]}>
            <Text className="h3">
              {useText(contentsSpecialsOffers.subTitle1)}
            </Text>
            <Text className="p">{useText(contentsSpecialsOffers.text1)}</Text>
            <Button className="btn">
              <Text>{useText(contentsSpecialsOffers.toBook)}</Text>
            </Button>
          </Column>
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [1, 0, 2, 0]}>
            <Text className="h3">
              {useText(contentsSpecialsOffers.subTitle2)}
            </Text>
            <Text className="p">{useText(contentsSpecialsOffers.text2)}</Text>
            <Button className="btn"></Button>
          </Column>
        </RowToColumn>
        <Image className="fullWidth" src={img1} alt="paysage" />
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0, 1, 1, 1]}
          marginForColumn={[2, 1, 1, 1]}
          isReverseForColumn={true}
        >
          <Column opt_margin={isLaptop ? [0.5, 0.5, 0, 0] : [1, 0, 2, 0]}>
            <Text className="h3">
              {useText(contentsSpecialsOffers.subTitle3)}
            </Text>
            <Text className="p">{useText(contentsSpecialsOffers.text3)}</Text>
            <Button className="btn">
              <Text>{useText(contentsSpecialsOffers.toBook)}</Text>
            </Button>
          </Column>
          <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [1, 0, 2, 0]}>
            <Text className="h3">
              {useText(contentsSpecialsOffers.subTitle4)}
            </Text>
            <Text className="p">{useText(contentsSpecialsOffers.text4)}</Text>
            <Button className="btn">
              <Text>{useText(contentsSpecialsOffers.toBook)}</Text>
            </Button>
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
