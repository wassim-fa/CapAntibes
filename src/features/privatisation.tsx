import Button from '@/components/Button'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import img1 from '../../public/assets/images/privatisation/privatisation_1.png'
import img1Mobile from '../../public/assets/images/privatisation/privatisation_1_mobile.png'
import img2 from '../../public/assets/images/privatisation/privatisation_2.png'
import img3 from '../../public/assets/images/privatisation/privatisation_3.png'
import img4 from '../../public/assets/images/privatisation/privatisation_4.png'

import Image from 'next/image'
import Column from '@/components/Column'
import { IMetaPage, TCssSize } from '@/interfaces'
import { PrivatisationPageStyles } from '@/styles/pages/privatisation'
import { contentsPrivatisation } from '@/contents/pages'

export default function Privatisation(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const valueSpacing = isLaptop ? 20 : 10
  const spacing: TCssSize = { value: valueSpacing, unit: 'px' }
  return (
    <>
      <PrivatisationPageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="privatisation" className={!isLaptop ? 'mobile' : ''}>
        <Column opt_margin={isLaptop ? [1, 1, 2, 1] : [3, 1.5, 1.5, 1.5]}>
          <Text className="h1">{useText(contentsPrivatisation.title)}</Text>
          <Text className="p">
            {useText(contentsPrivatisation.description)}
          </Text>
          <Button className="btn">
            <Text>{useText(contentsPrivatisation.button)}</Text>
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
            <Text className="h3">
              {useText(contentsPrivatisation.subTitle1)}
            </Text>
            <Text className="p">{useText(contentsPrivatisation.text1)}</Text>
            <Button className="btn">
              <Text>{useText(contentsPrivatisation.button)}</Text>
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
            <Text className="h3">
              {useText(contentsPrivatisation.subTitle2)}
            </Text>
            <Text className="p">{useText(contentsPrivatisation.text2)}</Text>
            <Button className="btn">
              <Text>{useText(contentsPrivatisation.button)}</Text>
            </Button>
          </Column>
        </RowToColumn>
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
            <Text className="h3">
              {useText(contentsPrivatisation.subTitle3)}
            </Text>
            <Text className="p">{useText(contentsPrivatisation.text3)}</Text>
            <Button className="btn">
              <Text>{useText(contentsPrivatisation.button)}</Text>
            </Button>
          </Column>
          <Column opt_alignItems="flex-end" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img4}
              alt="plage"
            />
          </Column>
        </RowToColumn>
      </main>
    </>
  )
}
