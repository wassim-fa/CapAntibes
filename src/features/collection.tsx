import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import imgButton from '../../public/assets/images/collection/button.jpg'
import img1Mobile from '../../public/assets/images/collection/collection_1_mobile.jpg'
import img1 from '../../public/assets/images/collection/collection_1.jpg'

import Image from 'next/image'
import Column from '@/components/Column'
import Button from '@/components/Button'
import { CollectionPageStyles } from '@/styles/pages/collection'
import Row from '@/components/Row'
import { contentsCollection } from '@/contents/pages/collection'
import Link from 'next/link'
import { IMetaPage } from '@/interfaces'

export default function Collection(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  return (
    <>
      <CollectionPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="collection" className={!isLaptop ? 'mobile' : ''}>
        <Row opt_margin={isLaptop ? [1.5, 1.5, 0, 1.5] : [6, 1.5, 1, 1.5]}>
          <Text className="p">{useText(contentsCollection.introduction)}</Text>
        </Row>
        <Row opt_margin={[0, 1.5, 0.5, 1.5]} opt_alignItems="stretch">
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Link scroll href="/">
              <Button className="btn">
                <Text>{useText(contentsCollection.button)}</Text>
              </Button>
            </Link>
          </Column>
          <Column opt_alignItems="flex-end" opt_justifyContent="center">
            <Image id="address-btn" src={imgButton} alt="adresses" />
          </Column>
        </Row>
        <Image
          className={'fullWidth'}
          src={isLaptop ? img1 : img1Mobile}
          alt="images"
        />
      </main>
    </>
  )
}
