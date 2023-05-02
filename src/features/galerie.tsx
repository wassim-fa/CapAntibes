import { useIsLaptop } from '@/hooks'
import Head from 'next/head'
import img1 from '../../public/assets/images/galerie/img_1.jpg'
import img2 from '../../public/assets/images/galerie/img_2.jpg'
import img3 from '../../public/assets/images/galerie/img_3.jpg'
import img4 from '../../public/assets/images/galerie/img_4.jpg'
import img5 from '../../public/assets/images/galerie/img_5.jpg'
import img6 from '../../public/assets/images/galerie/img_6.jpg'
import img7 from '../../public/assets/images/galerie/img_7.jpg'
import img8 from '../../public/assets/images/galerie/img_8.jpg'
import img9 from '../../public/assets/images/galerie/img_9.jpg'
import img10 from '../../public/assets/images/galerie/img_10.jpg'
import img11 from '../../public/assets/images/galerie/img_11.jpg'
import img12 from '../../public/assets/images/galerie/img_12.jpg'

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
