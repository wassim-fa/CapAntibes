import Button from '@/components/Button'
import Row from '@/components/Row'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { contentsRoomsIndex } from '@/contents/pages'
import { useIsLaptop, useText } from '@/hooks'
import { RoomsPageStyles } from '@/styles/pages/rooms'
import Head from 'next/head'
import img1 from '../../../public/assets/images/rooms/index/rooms_1.png'
import img2 from '../../../public/assets/images/rooms/index/rooms_2.png'
import img1_mobile from '../../../public/assets/images/rooms/index/rooms_1_mobile.png'
import img2_mobile from '../../../public/assets/images/rooms/index/rooms_2_mobile.png'
import random1 from '../../../public/assets/images/rooms/index/random_1.png'
import random2 from '../../../public/assets/images/rooms/index/random_2.png'
import RandomImages from '@/components/RandomImages'
import Carrousel from '@/components/Carrousel'
import Image from 'next/image'
import Column from '@/components/Column'
import { TCssSize } from '@/interfaces'
import Link from 'next/link'

const randomsImages = [
  random1,
  random2,
  random1,
  random2,
  random1,
  random2,
  random1,
  random2,
  random1,
  random2
]
export default function Rooms() {
  const isLaptop = useIsLaptop()
  const spacing: TCssSize = { value: 0.8, unit: 'vw' }
  return (
    <>
      <RoomsPageStyles />
      <Head>
        <title>Rooms</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="rooms" className={!isLaptop ? 'mobile' : ''}>
        <Row opt_margin={isLaptop ? [1, 1, 0.5, 1] : [3, 0.5, 0.5, 0.5]}>
          <Text className="h1">{useText(contentsRoomsIndex.title)}</Text>
        </Row>
        <RowToColumn
          className="section"
          align={isLaptop ? 'flex-end' : 'flex-start'}
          marginForRow={[0.5, 1, 0.5, 1]}
          marginForColumn={[1, 0.5, 1, 0.5]}
        >
          <Text className="p">{useText(contentsRoomsIndex.subTitle1)}</Text>
          <Button className="btn">
            <Text>{useText(contentsRoomsIndex.toBook)}</Text>
          </Button>
        </RowToColumn>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 0.5, 0]}
          marginForColumn={[1, 0, 0, 0]}
        >
          <Column opt_margin={[0.5, 0.5, 1, 0.5]} opt_spacing={spacing}>
            <Text className="h3">{useText(contentsRoomsIndex.luxeTitle)}</Text>
            <Text className="p">
              {useText(contentsRoomsIndex.luxeSubTitle)}
            </Text>
            <Link href="/rooms/luxe">
              <Button className="btn">
                <Text>{useText(contentsRoomsIndex.toBook)}</Text>
              </Button>
            </Link>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 1, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="center"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img1 : img1_mobile}
              alt="chambre de luxe"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 0, 0.5, 0]}
          marginForColumn={[1, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_margin={isLaptop ? [0.2, 1, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="center"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img2 : img2_mobile}
              alt="chambre privilège"
            />
          </Column>
          <Column opt_margin={[0.5, 0.5, 1, 0.5]} opt_spacing={spacing}>
            <Text className="h3">{useText(contentsRoomsIndex.luxeTitle)}</Text>
            <Text className="p">
              {useText(contentsRoomsIndex.luxeSubTitle)}
            </Text>
            <Link href="/rooms/luxe">
              <Button className="btn">
                <Text>{useText(contentsRoomsIndex.toBook)}</Text>
              </Button>
            </Link>
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
