import Row from '@/components/Row'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import random1 from '../../public/assets/images/address/random_1.jpg'
import random2 from '../../public/assets/images/address/random_2.jpg'
import img1 from '../../public/assets/images/address/address_1.jpg'
import img1Mobile from '../../public/assets/images/address/address_1_mobile.jpg'
import img2Mobile from '../../public/assets/images/address/address_2_mobile.jpg'

import Image from 'next/image'
import Column from '@/components/Column'
import { AddressPageStyles } from '@/styles/pages/address'
import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import { contentsAddress } from '@/contents/pages'
import { IMetaPage } from '@/interfaces'

const randomsImages = [random1, random2]
export default function Address(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const subTitle2 = useText(contentsAddress.subTitle2)
  const text2 = useText(contentsAddress.text2)
  return (
    <>
      <AddressPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="address" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <Row opt_margin={isLaptop ? [0.5, 1, 0.5, 1] : [2, 1, 2, 1]}>
          <Text className="p">{useText(contentsAddress.introduction)}</Text>
        </Row>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0, 1, 1, 1]}
          marginForColumn={[0, 1, 1, 1]}
          isReverseForColumn={true}
        >
          <Column opt_margin={isLaptop ? [0.5, 0.5, 0, 0] : [0, 0, 0, 0]}>
            <Text className="h3">{useText(contentsAddress.subTitle1)}</Text>
            <Text className="p">{useText(contentsAddress.text1)}</Text>
          </Column>
          {isLaptop && (
            <Column>
              <Text className="h3">{subTitle2}</Text>
              <Text className="p">{text2}</Text>
            </Column>
          )}
        </RowToColumn>
        {!isLaptop && (
          <>
            <Image
              style={{ margin: '10% 0' }}
              className="fullWidth"
              src={img1Mobile}
              alt="paysage"
            />
            <Column opt_margin={[0, 1, 1, 1]}>
              <Text className="h3">{subTitle2}</Text>
              <Text className="p">{text2}</Text>
            </Column>
          </>
        )}
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
