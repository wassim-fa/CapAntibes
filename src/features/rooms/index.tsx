import Button from '@/components/Button'
import Row from '@/components/Row'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { contentsRoomsIndex } from '@/contents/pages'
import { useIsLaptop, useLink, useText } from '@/hooks'
import { RoomsPageStyles } from '@/styles/pages/rooms'
import Head from 'next/head'
import img1 from '../../../public/assets/images/rooms/index/rooms_1.jpg'
import img2 from '../../../public/assets/images/rooms/index/rooms_2.jpg'
import img3 from '../../../public/assets/images/rooms/index/rooms_3.jpg'
import img4 from '../../../public/assets/images/rooms/index/rooms_4.jpg'
import img5 from '../../../public/assets/images/rooms/index/rooms_5.jpg'
import img6 from '../../../public/assets/images/rooms/index/rooms_6.jpg'
import img7 from '../../../public/assets/images/rooms/index/rooms_7.jpg'
import img8 from '../../../public/assets/images/rooms/index/rooms_8.jpg'
import img9 from '../../../public/assets/images/rooms/index/rooms_9.jpg'
import img1_mobile from '../../../public/assets/images/rooms/index/rooms_1_mobile.jpg'
import img2_mobile from '../../../public/assets/images/rooms/index/rooms_2_mobile.jpg'
import img3_mobile from '../../../public/assets/images/rooms/index/rooms_3_mobile.jpg'
import img4_mobile from '../../../public/assets/images/rooms/index/rooms_4_mobile.jpg'
import img5_mobile from '../../../public/assets/images/rooms/index/rooms_5_mobile.jpg'
import img7_mobile from '../../../public/assets/images/rooms/index/rooms_7_mobile.jpg'
import img8_mobile from '../../../public/assets/images/rooms/index/rooms_8_mobile.jpg'
import img9_mobile from '../../../public/assets/images/rooms/index/rooms_9_mobile.jpg'
import random1 from '../../../public/assets/images/rooms/index/random_1.jpg'
import random2 from '../../../public/assets/images/rooms/index/random_2.jpg'
import Image from 'next/image'
import Column from '@/components/Column'
import { IMetaPage, TCssSize } from '@/interfaces'
import Link from 'next/link'

export default function Rooms(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const spacing: TCssSize = { value: 0.8, unit: 'vw' }
  return (
    <>
      <RoomsPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main id="rooms" className={!isLaptop ? 'mobile' : ''}>
        <Column opt_margin={isLaptop ? [1, 3, 2, 1] : [3, 1.5, 1.5, 1.5]}>
          <Text className="h1">{useText(contentsRoomsIndex.title)}</Text>
          <Text className="p">{useText(contentsRoomsIndex.subTitle1)}</Text>
          <Button className="btn">
            <Text>{useText(contentsRoomsIndex.toBook)}</Text>
          </Button>
        </Column>
        {isLaptop && (
          <Row opt_margin={[0, 0, 0, 0]} className="imgs">
            <Image src={random1} alt="image" />
            <Image src={random2} alt="image" />
          </Row>
        )}
        <RowToColumn
          align="center"
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[1, 0, 0, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
            opt_spacing={spacing}
          >
            <Text className="h3">{useText(contentsRoomsIndex.luxeTitle)}</Text>
            <Text className="p">
              {useText(contentsRoomsIndex.luxeSubTitle)}
            </Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link shallow replace href={useLink('/chambre-deluxe')}>
                  <Button className="btn">
                    <Text>{useText(contentsRoomsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRoomsIndex.toBook)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
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
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[1, 0, 0, 0]}
        >
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 0] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-start"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img2 : img2_mobile}
              alt="chambre privilège"
            />
          </Column>
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
            opt_spacing={spacing}
          >
            <Text className="h3">{useText(contentsRoomsIndex.priviTitle)}</Text>
            <Text className="p">
              {useText(contentsRoomsIndex.priviSubTitle)}
            </Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link
                  shallow
                  replace
                  href={useLink('/chambre-privilege-vue-mer')}
                >
                  <Button className="btn">
                    <Text>{useText(contentsRoomsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRoomsIndex.toBook)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
        </RowToColumn>
        <Row>
          <Image
            className={'fullWidth'}
            src={isLaptop ? img3 : img3_mobile}
            alt="chambre privilège"
          />
        </Row>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[1, 0, 0, 0]}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
            opt_spacing={spacing}
          >
            <Text className="h3">
              {useText(contentsRoomsIndex.seaViewTitle)}
            </Text>
            <Text className="p">
              {useText(contentsRoomsIndex.seaViewSubTitle)}
            </Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link shallow replace href={useLink('/chambre-deluxe')}>
                  <Button className="btn">
                    <Text>{useText(contentsRoomsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRoomsIndex.toBook)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img4 : img4_mobile}
              alt="chambre de luxe"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[1, 0, 0, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 0] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-start"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img5 : img5_mobile}
              alt="chambre privilège"
            />
          </Column>
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
            opt_spacing={spacing}
          >
            <Text className="h3">
              {useText(contentsRoomsIndex.designTitle)}
            </Text>
            <Text className="p">
              {useText(contentsRoomsIndex.designSubTitle)}
            </Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link
                  shallow
                  replace
                  href={useLink('/chambre-privilege-vue-mer')}
                >
                  <Button className="btn">
                    <Text>{useText(contentsRoomsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRoomsIndex.toBook)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
        </RowToColumn>
        {isLaptop && (
          <Row>
            <Image className={'fullWidth'} src={img6} alt="chambre privilège" />
          </Row>
        )}
        <RowToColumn
          align="center"
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[1, 0, 0, 0]}
        >
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
            opt_spacing={spacing}
          >
            <Text className="h3">
              {useText(contentsRoomsIndex.executiveTitle)}
            </Text>
            <Text className="p">
              {useText(contentsRoomsIndex.executiveSubTitle)}
            </Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link shallow replace href={useLink('/chambre-deluxe')}>
                  <Button className="btn">
                    <Text>{useText(contentsRoomsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRoomsIndex.toBook)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 1] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-end"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img7 : img7_mobile}
              alt="chambre de luxe"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          align="center"
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[1, 0, 0, 0]}
          isReverseForColumn={true}
        >
          <Column
            opt_margin={isLaptop ? [0.2, 0, 0.2, 0] : [0.2, 0, 0.2, 0]}
            opt_alignItems="flex-start"
          >
            <Image
              className={isLaptop ? '' : 'fullWidth'}
              src={isLaptop ? img8 : img8_mobile}
              alt="chambre privilège"
            />
          </Column>
          <Column
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1.5, 1.5, 2, 1.5]}
            opt_spacing={spacing}
          >
            <Text className="h3">
              {useText(contentsRoomsIndex.sharedTitle)}
            </Text>
            <Text className="p">
              {useText(contentsRoomsIndex.sharedSubTitle)}
            </Text>
            <Row>
              <Column opt_alignItems="flex-start">
                <Link
                  shallow
                  replace
                  href={useLink('/chambre-privilege-vue-mer')}
                >
                  <Button className="btn">
                    <Text>{useText(contentsRoomsIndex.discover)}</Text>
                  </Button>
                </Link>
              </Column>
              <Column opt_alignItems="flex-end">
                <Button className="btn">
                  <Text>{useText(contentsRoomsIndex.toBook)}</Text>
                </Button>
              </Column>
            </Row>
          </Column>
        </RowToColumn>
        <Row opt_margin={[0, 0, 2, 0]}>
          <Image
            className={'fullWidth'}
            src={isLaptop ? img9 : img9_mobile}
            alt="chambre privilège"
          />
        </Row>
      </main>
    </>
  )
}
