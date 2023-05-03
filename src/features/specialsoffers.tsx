import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../public/assets/images/specials_offers/random_1.png'
import random2 from '../../public/assets/images/specials_offers/random_2.png'
import img1Mobile from '../../public/assets/images/specials_offers/img_1_mobile.png'
import img2Mobile from '../../public/assets/images/specials_offers/img_2_mobile.png'
import img3Mobile from '../../public/assets/images/specials_offers/img_3_mobile.png'
import img1 from '../../public/assets/images/specials_offers/specials_offers_1.png'

import Image from 'next/image'
import Column from '@/components/Column'
import Button from '@/components/Button'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { SpecialsOffersPageStyles } from '@/styles/pages/specials_offers'
import { contentsSpecialsOffers } from '@/contents/pages/specials_offers'
import { IMetaPage } from '@/interfaces'

const randomsImages = [random1, random2]
export default function SpecialsOffers(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const texts = {
    subTitle2: useText(contentsSpecialsOffers.subTitle2),
    text2: useText(contentsSpecialsOffers.text2),
    subTitle3: useText(contentsSpecialsOffers.subTitle3),
    text3: useText(contentsSpecialsOffers.text3),
    subTitle4: useText(contentsSpecialsOffers.subTitle4),
    text4: useText(contentsSpecialsOffers.text4),
    toBook: useText(contentsSpecialsOffers.toBook)
  }
  return (
    <>
      <SpecialsOffersPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
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
          {isLaptop && (
            <Column opt_margin={[0, 0, 0, 0]}>
              <Text className="h3">{texts.subTitle2}</Text>
              <Text className="p">{texts.text2}</Text>
              <Button className="btn">
                <Text>{texts.toBook}</Text>
              </Button>
            </Column>
          )}
        </RowToColumn>
        {!isLaptop && (
          <RowToColumn
            className="section"
            align={isLaptop ? 'center' : 'flex-start'}
            marginForRow={[0, 0, 0, 0]}
            marginForColumn={[0, 0, 0, 0]}
          >
            <Image className="fullWidth" src={img1Mobile} alt="paysage" />
            <Column opt_margin={[2, 1, 1, 1]}>
              <Text className="h3">{texts.subTitle2}</Text>
              <Text className="p">{texts.text2}</Text>
              <Button className="btn">
                <Text>{texts.toBook}</Text>
              </Button>
            </Column>
          </RowToColumn>
        )}

        {isLaptop && <Image className="fullWidth" src={img1} alt="paysage" />}

        {isLaptop && (
          <RowToColumn
            className="section"
            align={isLaptop ? 'center' : 'flex-start'}
            marginForRow={[0, 1, 1, 1]}
            marginForColumn={[2, 1, 1, 1]}
            isReverseForColumn={true}
          >
            <Column opt_margin={isLaptop ? [0.5, 0.5, 0, 0] : [1, 0, 2, 0]}>
              <Text className="h3">{texts.subTitle3}</Text>
              <Text className="p">{texts.text3}</Text>
              <Button className="btn">
                <Text>{texts.toBook}</Text>
              </Button>
            </Column>
            <Column opt_margin={isLaptop ? [0, 0, 0, 0] : [1, 0, 2, 0]}>
              <Text className="h3">{texts.subTitle4}</Text>
              <Text className="p">{texts.text4}</Text>
              <Button className="btn">
                <Text>{texts.toBook}</Text>
              </Button>
            </Column>
          </RowToColumn>
        )}

        {!isLaptop && (
          <RowToColumn
            className="section"
            align={isLaptop ? 'center' : 'flex-start'}
            marginForRow={[0, 0, 0, 0]}
            marginForColumn={[0, 0, 0, 0]}
          >
            <Image className="fullWidth" src={img2Mobile} alt="paysage" />
            <Column opt_margin={[2, 1, 1, 1]}>
              <Text className="h3">{texts.subTitle3}</Text>
              <Text className="p">{texts.text3}</Text>
              <Button className="btn">
                <Text>{texts.toBook}</Text>
              </Button>
            </Column>
          </RowToColumn>
        )}

        {!isLaptop && (
          <RowToColumn
            className="section"
            align={isLaptop ? 'center' : 'flex-start'}
            marginForRow={[0, 0, 0, 0]}
            marginForColumn={[0, 0, 0, 0]}
          >
            <Image className="fullWidth" src={img3Mobile} alt="paysage" />
            <Column opt_margin={[2, 1, 1, 1]}>
              <Text className="h3">{texts.subTitle4}</Text>
              <Text className="p">{texts.text4}</Text>
              <Button className="btn">
                <Text>{texts.toBook}</Text>
              </Button>
            </Column>
          </RowToColumn>
        )}
      </main>
    </>
  )
}
