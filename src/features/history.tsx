import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import img1 from '../../public/assets/images/history/history_1.jpg'
import img2 from '../../public/assets/images/history/history_2.jpg'
import img3 from '../../public/assets/images/history/history_3.jpg'
import img4 from '../../public/assets/images/history/history_4.jpg'
import img5 from '../../public/assets/images/history/history_5.jpg'
import img6 from '../../public/assets/images/history/history_6.jpg'
import img7 from '../../public/assets/images/history/history_7.jpg'
import random1 from '../../public/assets/images/history/random_1.jpg'
import random2 from '../../public/assets/images/history/random_2.jpg'

import Image from 'next/image'
import Column from '@/components/Column'
import { IMetaPage, TCssSize } from '@/interfaces'
import RandomImages from '@/components/RandomImages'
import Carrousel from '@/components/Carrousel'
import { HistoryPageStyles } from '@/styles/pages/history'
import Row from '@/components/Row'
import { contentsHistory } from '@/contents/pages/history'

const randomsImages = [random1, random2, random1, random2]
export default function History(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const valueSpacing = isLaptop ? 20 : 10
  const title1 = useText(contentsHistory.chapter1)
  const text1 = useText(contentsHistory.text1)
  const title2 = useText(contentsHistory.chapter2)
  const text2 = useText(contentsHistory.text2)

  const spacing: TCssSize = { value: valueSpacing, unit: 'px' }
  return (
    <>
      <HistoryPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="history" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? (
          <RandomImages listImages={randomsImages} />
        ) : (
          <Carrousel images={randomsImages} />
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[1, 0, 0.5, 0]}
          marginForColumn={[1.5, 0, 1.5, 0]}
        >
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0, 0.5, 0, 1.5] : [1, 1.5, 2, 1.5]}
          >
            <Text className="h3">{title1}</Text>
            <Text className="p">{text1}</Text>
          </Column>
          <Column opt_alignItems="center" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={img1}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        {isLaptop && (
          <Row opt_margin={[1, 0, 1, 0]}>
            <Image src={img2} alt="image" />
            <Image src={img3} alt="image" />
            <Image src={img4} alt="image" />
          </Row>
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 0, 1.5, 0]}
          marginForColumn={[0, 0, 0, 0]}
          isReverseForRow={true}
        >
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0, 1.5, 0, 0.5] : [1, 1.5, 2.5, 1.5]}
          >
            <Text className="h3">{title2}</Text>
            <Text className="p">{text2}</Text>
          </Column>
          <Column opt_alignItems="center" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '60%' : '100%'}`,
                height: 'auto'
              }}
              src={img5}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <Row className="last-img" opt_margin={[0, 0, 1, 0]}>
          <Image src={img6} alt="image" />
          <Image src={img7} alt="image" />
        </Row>
      </main>
    </>
  )
}
