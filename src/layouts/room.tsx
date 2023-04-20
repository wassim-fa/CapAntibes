import Carrousel from '@/components/Carrousel'
import RandomImages from '@/components/RandomImages'
import RowToColumn from '@/components/RowToColumn'
import { useIsLaptop, useLink, useText } from '@/hooks'
import { IContentByLang } from '@/interfaces'
import { RoomPageStyles } from '@/styles/pages/rooms/room'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import Text from '@/components/Text'
import Button from '@/components/Button'
import Column from '@/components/Column'
import Row from '@/components/Row'
import Divider from '@/components/Divider'

interface IITemProps {
  itemPadding: number
  item: IContentByLang
}
const Item = ({ itemPadding, item }: IITemProps) => {
  const itemText = useText(item)
  const isLaptop = useIsLaptop()
  return (
    <Column
      style={{
        marginTop: `${2 * itemPadding}px`
      }}
      opt_spacing={{ unit: 'px', value: itemPadding }}
    >
      <Text className="item">{itemText}</Text>
      <Divider opt_height={isLaptop ? {
        unit: 'px',
        value: 2
      } : {
        unit: 'px',
        value: 1
      }} />
    </Column>
  )
}

interface IMeta {
  title: string
  description: string
}
interface IMenu {
  left: string
  middle: string
  right: string
}
interface IRoomLayoutProps {
  meta: IMeta
  randomsImages: StaticImageData[]
  content: Record<string, IContentByLang>
  items: IContentByLang[]
  menu: IMenu
  image: StaticImageData
  imageMobile: StaticImageData
}
const RoomLayout = (props: IRoomLayoutProps): JSX.Element => {
  const { meta, randomsImages, content, menu, image, imageMobile, items } =
    props
  const isLaptop = useIsLaptop()
  const imgToShow = isLaptop ? image : imageMobile
  const nbItemsPerColumn = Math.round(items.length / 3)
  const itemsColumnMargin = isLaptop ? '25px' : 'initial'
  const itemPadding = isLaptop ? 6 : 3

  const renderItemsColumn = (start: number) => {
    const end = nbItemsPerColumn + start
    const _items = items.slice(start, end)
    return _items.map((item, index) => (
      <Item key={start + index} item={item} itemPadding={itemPadding} />
    ))
  }
  const renderItems = () => (
    <>
      <Column>{renderItemsColumn(0)}</Column>
      <Column
        style={{
          marginRight: itemsColumnMargin,
          marginLeft: itemsColumnMargin
        }}
      >
        {renderItemsColumn(nbItemsPerColumn)}
      </Column>
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
          className="menu"
          align="center"
          marginForRow={[0.2, 0.5, 0.5, 0.5]}
          marginForColumn={[1, 0.5, 1, 0.5]}
        >
          <Column opt_alignItems="flex-start">
            <Link
              style={{
                display: 'flex',
                justifyContent: 'flex-start'
              }}
              href={useLink(menu.left)}
            >
              <Button opt_arrow_position="left">
                <Text>{useText(content.menuLeft)}</Text>
              </Button>
            </Link>
          </Column>
          {/* <Link
            className="menu-middle"
            style={{ display: 'flex', justifyContent: 'center' }}
            href={useLink(menu.middle)}
          >
            <Text>{useText(content.menuMiddle)}</Text>
          </Link> */}

          <Column opt_alignItems="flex-end">
            <Link
              style={{
                display: 'flex',
                justifyContent: 'flex-end'
              }}
              href={useLink(menu.right)}
            >
              <Button opt_arrow_position="right">
                <Text>{useText(content.menuRight)}</Text>
              </Button>
            </Link>
          </Column>
        </RowToColumn>
        <Column
          opt_margin={isLaptop ? [0.5, 1, 0.5, 1] : [1, 0.5, 1, 0.5]}
          opt_spacing={{ unit: 'px', value: 10 }}
        >
          <Text className="h3">{useText(content.title)}</Text>
          <Text className="p">{useText(content.subTitle1)}</Text>
          <Button className="btn">
            <Text>{useText(content.toBook)}</Text>
          </Button>
        </Column>
        <RowToColumn
          className="items"
          align="flex-start"
          marginForRow={[0.5, 1, 0.5, 1]}
          marginForColumn={[1, 0.5, 1, 0.5]}
        >
          {renderItems()}
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
