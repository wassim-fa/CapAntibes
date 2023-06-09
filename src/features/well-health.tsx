import Button from '@/components/Button'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import img1 from '../../public/assets/images/well-health/well-health_1.png'
import img1Mobile from '../../public/assets/images/well-health/well-health_1_mobile.png'
import img2 from '../../public/assets/images/well-health/well-health_2.png'
import img3 from '../../public/assets/images/well-health/well-health_3.png'
import img4 from '../../public/assets/images/well-health/well-health_4.png'
import img5 from '../../public/assets/images/well-health/well-health_5.png'

import Image from 'next/image'
import Column from '@/components/Column'
import { IMetaPage, TCssSize } from '@/interfaces'
import { contentsWellHealth } from '@/contents/pages'
import { WellHealthPageStyles } from '@/styles/pages/well-health'

export default function WellHealth(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const valueSpacing = isLaptop ? 20 : 10
  const spacing: TCssSize = { value: valueSpacing, unit: 'px' }
  return (
    <>
      <WellHealthPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main id="well-health" className={!isLaptop ? 'mobile' : ''}>
        <Column opt_margin={isLaptop ? [1, 1, 2, 1] : [3, 1.5, 1.5, 1.5]}>
          <Text className="h1">{useText(contentsWellHealth.title)}</Text>
          <Text className="p">{useText(contentsWellHealth.description)}</Text>
          <Button className="btn">
            <Text>{useText(contentsWellHealth.button)}</Text>
          </Button>
        </Column>
        <Image
          style={{ marginBottom: '5%' }}
          className="fullWidth"
          src={isLaptop ? img1 : img1Mobile}
          alt="paysage"
        />
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [1, 0, 2, 0] : [1, 1.5, 1, 1.5]}
          >
            <Text className="h3">{useText(contentsWellHealth.subTitle1)}</Text>
            <Text className="p">{useText(contentsWellHealth.text1)}</Text>
            <Button className="btn">
              <Text>{useText(contentsWellHealth.button)}</Text>
            </Button>
          </Column>
          <Column opt_alignItems="flex-end" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img2}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_alignItems="flex-start" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img3}
              alt="plage"
            />
          </Column>
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [0.5, 0, 1, 0] : [1, 1.5, 1, 1.5]}
          >
            <Text className="h3">{useText(contentsWellHealth.subTitle2)}</Text>
            <Text className="p">{useText(contentsWellHealth.text2)}</Text>
            <Button className="btn">
              <Text>{useText(contentsWellHealth.button)}</Text>
            </Button>
          </Column>
        </RowToColumn>
        {isLaptop && (
          <Image
            style={{ marginBottom: '5%' }}
            className="fullWidth"
            src={img4}
            alt="paysage"
          />
        )}
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1.5, 0.5, 1.5]}
          marginForColumn={[0, 0, 1, 0]}
        >
          <Column
            opt_spacing={spacing}
            opt_margin={isLaptop ? [1, 0, 2, 0] : [1, 1.5, 1, 1.5]}
          >
            <Text className="h3">{useText(contentsWellHealth.subTitle3)}</Text>
            <Text className="p">{useText(contentsWellHealth.text3)}</Text>
            <Button className="btn">
              <Text>{useText(contentsWellHealth.button)}</Text>
            </Button>
          </Column>
          <Column opt_alignItems="flex-end" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img5}
              alt="plage"
            />
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
