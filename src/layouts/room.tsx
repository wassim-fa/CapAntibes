import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import RowToColumn from '@/components/RowToColumn'
import { useIsLaptop, useText } from '@/hooks'
import { IContentByLang } from '@/interfaces'
import { defaultTheme } from '@/styles'
import { RoomPageStyles } from '@/styles/pages/rooms/room'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Column from '@/components/Column'
import Row from '@/components/Row'
import Divider from '@/components/Divider'

interface IMeta {
  title: string
  description: string
}
interface IMenu {
  left: string
  middle: string
  right: string
}
interface IRoomLayout {
  meta: IMeta
  randomsImages: StaticImageData[]
  content: Record<string, IContentByLang>
  items: IContentByLang[],
  menu: IMenu
  image: StaticImageData
  imageMobile: StaticImageData
}
const RoomLayout = (props: IRoomLayout): JSX.Element => {
  const { meta, randomsImages, content, menu, image, imageMobile, items } = props
  const isLaptop = useIsLaptop()
  const imgToShow = isLaptop ? image : imageMobile;
  const nbItemsPerColumn = Math.round(items.length / 3)
  const itemsByLang = items.map((item) => useText(item))
  const itemsColumnMargin = isLaptop ? '25px' : 'initial'
  const itemPadding = isLaptop ? 6 : 3

  const renderItemsColumn = (start: number) => {
    const end = nbItemsPerColumn + start
    const items = itemsByLang.slice(start, end)
    return items.map((item, index) => (
      <Column style={{
        marginTop: `${2*itemPadding}px`
      }} key={start + index} opt_spacing={{unit: 'px', value: itemPadding}}>
        <Text className='item'>{item}</Text>
        <Divider />
      </Column>)
    )
  }
  const renderItems = () => (
    <>
      <Column>{renderItemsColumn(0)}</Column>
      <Column style={{
        marginRight: itemsColumnMargin,
        marginLeft: itemsColumnMargin
      }}>{renderItemsColumn(nbItemsPerColumn)}</Column>
      <Column>{renderItemsColumn(2 * nbItemsPerColumn)}</Column>
    </>
  )


  return (
    <>
      <RoomPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="room" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <RowToColumn
          className='menu'
          align="center"
          marginForRow={[0.5, 1, 0.5, 1]}
          marginForColumn={[1, 0.5, 1, 0.5]}
        >
          <Link style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }} href={menu.left}>
            <Button opt_arrow_position='left' ><Text>{useText(content.menuLeft)}</Text></Button>
          </Link>
          <Link className='menu-middle' style={{ width: '100%', display: 'flex', justifyContent: 'center' }} href={menu.middle}>
            <Text>{useText(content.menuMiddle)}</Text>
          </Link>
          <Link style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }} href={menu.right}>
            <Button opt_arrow_position='right' ><Text>{useText(content.menuRight)}</Text></Button>
          </Link>
        </RowToColumn>
        <RowToColumn
          className="section"
          align='flex-start'
          marginForRow={[0.5, 1, 0.5, 1]}
          marginForColumn={[1, 0.5, 1, 0.5]}
        >
          <Column opt_spacing={{ unit: 'px', value: 10 }}>
            <Text className="h3">{useText(content.title)}</Text>
            <Text className="p">{useText(content.subTitle1)}</Text>
          </Column>
          <Column opt_alignItems={isLaptop ? 'center' : 'flex-start'}>
            <Button className="btn">
              <Text>{useText(content.toBook)}</Text>
            </Button>
          </Column>
        </RowToColumn>
        <RowToColumn
          className="items"
          align='flex-start'
          marginForRow={[0.5, 1, 0.5, 1]}
          marginForColumn={[1, 0.5, 1, 0.5]}
        >{renderItems()}
        </RowToColumn>
        <Row opt_margin={[0, 0, 1, 0]}>
          <Image
            src={imgToShow}
            className={'fullWidth'}
            alt={`images de ${useText(content.title)}`}
          />
        </Row>
      </main>
    </>
  )
}

export default RoomLayout
