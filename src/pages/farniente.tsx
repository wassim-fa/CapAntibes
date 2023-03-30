import Button from '@/components/Button'
import Row from '@/components/Row'
import RowToColumn from '@/components/RowToColumn'
import Text from '@/components/Text'
import { useIsLaptop, useText } from '@/hooks'
import Head from 'next/head'
import img1 from '../../public/assets/images/farniente/farniente_1.png'
import img2 from '../../public/assets/images/farniente/farniente_2.png'
import img3 from '../../public/assets/images/farniente/farniente_3.png'
import img2Mobile from '../../public/assets/images/farniente/farniente_2_mobile.png'
import img3Mobile from '../../public/assets/images/farniente/farniente_3_mobile.png'

import Image from 'next/image'
import Column from '@/components/Column'
import { TCssSize } from '@/interfaces'
import { FarnientePageStyles } from '@/styles/pages/farniente'
import { contentsFarniente } from '@/contents/pages/farniente'

export default function Farniente() {
  const isLaptop = useIsLaptop()
  const valueSpacing = isLaptop ? 20 : 10
  const spacing: TCssSize = { value: valueSpacing, unit: 'px' }
  return (
    <>
      <FarnientePageStyles />
      <Head>
        <title>Farniente</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="farniente" className={!isLaptop ? 'mobile' : ''}>
        <RowToColumn
          className="section"
          align={isLaptop ? 'center' : 'flex-start'}
          marginForRow={[0.5, 1, 0.5, 1]}
          marginForColumn={[0, 0, 1, 0]}
          isReverseForColumn={true}
        >
          <Column opt_spacing={spacing}>
            <Text className="h1">{useText(contentsFarniente.title)}</Text>
            <Text className="h3">{useText(contentsFarniente.subTitle1)}</Text>
            <Text className="p">{useText(contentsFarniente.text1)}</Text>
          </Column>
          <Column opt_alignItems="center" opt_justifyContent="center">
            <Image
              style={{
                width: `${isLaptop ? '70%' : '100%'}`,
                height: 'auto'
              }}
              src={img1}
              alt="plage"
            />
          </Column>
        </RowToColumn>
        <Row opt_margin={isLaptop ? [1, 1, 0.5, 1] : [3, 0.2, 0.2, 0.5]}>
          {isLaptop && <Column></Column>}
          <Column opt_spacing={spacing} className="item">
            <Text className="h3">{useText(contentsFarniente.subTitle2)}</Text>
            <Text className="p">{useText(contentsFarniente.text2)}</Text>
            <Button className="btn">
              <Text>{useText(contentsFarniente.btn2)}</Text>
            </Button>
          </Column>
        </Row>
        <Row opt_margin={isLaptop ? [1, 1, 0.5, 1] : [3, 0.2, 0.2, 0.5]}>
          <Column opt_spacing={spacing} className="item">
            <Text className="h3">{useText(contentsFarniente.subTitle3)}</Text>
            <Text className="p">{useText(contentsFarniente.text3)}</Text>
          </Column>
          {isLaptop && <Column></Column>}
        </Row>
        <Image
          className="fullWidth"
          src={isLaptop ? img2 : img2Mobile}
          alt="paysage"
        />
        <Row opt_margin={isLaptop ? [1, 1, 0.5, 1] : [3, 0.2, 0.2, 0.5]}>
          {isLaptop && <Column></Column>}
          <Column opt_spacing={spacing} className="item">
            <Text className="h3">{useText(contentsFarniente.subTitle4)}</Text>
            <Text className="p">{useText(contentsFarniente.text4)}</Text>
          </Column>
        </Row>
        <Row opt_margin={isLaptop ? [1, 1, 0.5, 1] : [3, 0.2, 0.2, 0.5]}>
          <Column opt_spacing={spacing} className="item">
            <Text className="h3">{useText(contentsFarniente.subTitle5)}</Text>
            <Text className="p">{useText(contentsFarniente.text5)}</Text>
          </Column>
          {isLaptop && <Column></Column>}
        </Row>
        <Row opt_margin={isLaptop ? [1, 1, 0.5, 1] : [3, 0.2, 0.2, 0.5]}>
          {isLaptop && <Column></Column>}
          <Column opt_spacing={spacing} className="item">
            <Text className="h3">{useText(contentsFarniente.subTitle6)}</Text>
            <Text className="p">{useText(contentsFarniente.text6)}</Text>
            <Button className="btn">
              <Text>{useText(contentsFarniente.btn6)}</Text>
            </Button>
          </Column>
        </Row>
        <Image
          style={{ marginBottom: '5%' }}
          className="fullWidth"
          src={isLaptop ? img3 : img3Mobile}
          alt="paysage"
        />
      </main>
    </>
  )
}
