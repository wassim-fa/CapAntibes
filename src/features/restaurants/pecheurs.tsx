import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../../public/assets/images/restaurants/pecheurs/random_1.jpg'
import random2 from '../../../public/assets/images/restaurants/pecheurs/random_2.jpg'
import img1 from '../../../public/assets/images/restaurants/pecheurs/pecheurs_1.jpg'
import img1Mobile from '../../../public/assets/images/restaurants/pecheurs/pecheurs_1_mobile.jpg'
import img2Mobile from '../../../public/assets/images/restaurants/pecheurs/pecheurs_2_mobile.jpg'

import Image from 'next/image'
import Column from '@/components/Column'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { contentsPecheursRestaurant } from '@/contents/pages'
import { PecheursRestaurantsPageStyles } from '@/styles/pages/restaurants/pecheurs'
import Button from '@/components/Button'
import { IMetaPage } from '@/interfaces'
import { useContext } from 'react'
import { LangContext } from '@/stores'
import Link from 'next/link'
import Languages from '@/enums/languages'
import ExternalLink from '@/components/ExternalLink'

const randomsImages = [random1, random2, random1, random2]
export default function PecheursRestaurant(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const { lang } = useContext(LangContext)
  let toBookLink = 'https://module.lafourchette.com/fr_FR/cta/iframe/5972-d196c'
  if (lang === Languages.EN) {
    toBookLink = 'https://module.lafourchette.com/en_US/cta/iframe/5972-d196c'
  }
  return (
    <>
      <PecheursRestaurantsPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main id="pecheurs-restaurant" className={!isLaptop ? 'mobile' : ''}>
        {!isLaptop && <Carrousel images={randomsImages} />}
        <Column
          style={{ width: `${isLaptop ? '90%' : '100%'}` }}
          opt_margin={isLaptop ? [0.5, 1, 1, 1] : [1.5, 1, 2, 1]}
        >
          <Text className="h3">
            {useText(contentsPecheursRestaurant.title)}
          </Text>
          <Text className="p">{useText(contentsPecheursRestaurant.intro)}</Text>

          <ExternalLink link={toBookLink}>
            <Button className="btn">
              <Text>{useText(contentsPecheursRestaurant.toBookTable)}</Text>
            </Button>
          </ExternalLink>
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
              {useText(contentsPecheursRestaurant.chapter1)}
            </Text>
            <Text className="h6">
              {useText(contentsPecheursRestaurant.subTitle1)}
            </Text>
            <Text className="p">
              {useText(contentsPecheursRestaurant.text1)}
            </Text>
            <Link
              href={
                lang === Languages.FR
                  ? '/pdfs/carte-les-pecheurs.pdf'
                  : '/pdfs/les-pecheurs-card.pdf'
              }
            >
              <Button className="btn">
                <Text>{useText(contentsPecheursRestaurant.menu)}</Text>
              </Button>
            </Link>
          </Column>
          <Column opt_margin={isLaptop ? [0.5, 0, 0.5, 0] : [2, 0, 2, 0]}>
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
          src={isLaptop ? img1 : img2Mobile}
          alt="paysage"
        />
      </main>
    </>
  )
}
