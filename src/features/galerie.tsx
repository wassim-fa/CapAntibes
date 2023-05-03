import { useIsLaptop } from '@/hooks'
import Head from 'next/head'
import img1 from '../../public/assets/images/galerie/img_1.png'
import img2 from '../../public/assets/images/galerie/img_2.png'
import img3 from '../../public/assets/images/galerie/img_3.png'
import img4 from '../../public/assets/images/galerie/img_4.png'
import img5 from '../../public/assets/images/galerie/img_5.png'
import img6 from '../../public/assets/images/galerie/img_6.png'
import img7 from '../../public/assets/images/galerie/img_7.png'
import img8 from '../../public/assets/images/galerie/img_8.png'
import img9 from '../../public/assets/images/galerie/img_9.png'
import img10 from '../../public/assets/images/galerie/img_10.png'
import img11 from '../../public/assets/images/galerie/img_11.png'
import img12 from '../../public/assets/images/galerie/img_12.png'

import Image from 'next/image'
import { GaleriePageStyles } from '@/styles/pages/galerie'
import Row from '@/components/Row'
import { IMetaPage } from '@/interfaces'

export default function Galerie(meta: IMetaPage) {
  const isLaptop = useIsLaptop()
  const renderDesktop = () => (
    <>
      <Row>
        <Image src={img1} alt="image" />
        <Image src={img2} alt="image" />
      </Row>
      <Row>
        <Image src={img3} alt="image" />
        <Image src={img4} alt="image" />
        <Image src={img5} alt="image" />
      </Row>
      <Row>
        <Image src={img6} alt="image" />
        <Image src={img7} alt="image" />
      </Row>
      <Row>
        <Image src={img8} alt="image" />
        <Image src={img9} alt="image" />
        <Image src={img10} alt="image" />
      </Row>
      <Row>
        <Image src={img11} alt="image" />
        <Image src={img12} alt="image" />
      </Row>
    </>
  )

  const renderMobile = () => (
    <>
      <Row>
        <Image src={img1} alt="image" />
      </Row>
      <Row>
        <Image src={img2} alt="image" />
        <Image src={img3} alt="image" />
      </Row>
      <Row>
        <Image src={img4} alt="image" />
        <Image src={img5} alt="image" />
      </Row>
      <Row>
        <Image src={img6} alt="image" />
      </Row>
      <Row>
        <Image src={img7} alt="image" />
        <Image src={img8} alt="image" />
      </Row>
      <Row>
        <Image src={img9} alt="image" />
        <Image src={img10} alt="image" />
      </Row>
      <Row>
        <Image src={img11} alt="image" />
      </Row>
      <Row>
        <Image src={img12} alt="image" />
      </Row>
    </>
  )
  return (
    <>
      <GaleriePageStyles />
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="galerie" className={!isLaptop ? 'mobile' : ''}>
        {isLaptop ? renderDesktop() : renderMobile()}
      </main>
    </>
  )
}
