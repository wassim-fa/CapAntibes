import { useIsMobile } from '@/hooks'
import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import random0 from '../../../public/assets/images/home/random0.png'
import random1 from '../../../public/assets/images/home/random1.png'
import random2 from '../../../public/assets/images/home/random2.png'
import random3 from '../../../public/assets/images/home/random3.png'
import random4 from '../../../public/assets/images/home/random4.png'
import random5 from '../../../public/assets/images/home/random5.png'
import random6 from '../../../public/assets/images/home/random6.png'
import random7 from '../../../public/assets/images/home/random7.png'
import Row from '../Row'
import Image from 'next/image'

const randomsImages = [
  random0,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7
]
type RandomImagesContainerProps = {
  imageToShow: number | number
  img1: number
  img2: number
}
const RandomImagesContainer = ({
  imageToShow,
  img1,
  img2
}: RandomImagesContainerProps) => (
  <S.Wrapper data-imgtoshow={imageToShow}>
    <Image src={randomsImages[img1]} alt="liste d'images" />
    <Image src={randomsImages[img2]} alt="liste d'images" />
  </S.Wrapper>
)

const RandomImages = () => {
  const isMobile = useIsMobile()
  const nbOfChildren = isMobile ? 1 : 2
  const initImgId: number = isMobile ? 1 : 3
  const [imgId, setImgId] = useState<number>(initImgId)
  const [componentActive, setComponentActive] = useState<number>(0)
  const [images, setImages] = useState<[number, number][]>([
    [0, 1],
    [2, 3]
  ])
  const [imagesToShow, setImagesToShow] = useState<[number, number]>([0, 0])

  const changeImgAuto = useCallback(() => {
    const newImgId = (imgId + 1) % randomsImages.length
    const newComponentActive = (componentActive + 1) % nbOfChildren
    const _imagesToShow = imagesToShow
    _imagesToShow[newComponentActive] =
      (imagesToShow[newComponentActive] + 1) % nbOfChildren
    const _images = images
    _images[newComponentActive][_imagesToShow[newComponentActive]] = newImgId

    setImgId(newImgId)
    setImages(_images)
    setImagesToShow(_imagesToShow)
    setComponentActive(newComponentActive)
  }, [
    setImgId,
    setImages,
    setImagesToShow,
    setComponentActive,
    componentActive,
    images,
    imagesToShow,
    imgId,
    nbOfChildren
  ])
  useEffect(() => {
    const interval = setInterval(() => {
      changeImgAuto()
    }, 2000)
    return () => clearInterval(interval)
  }, [changeImgAuto])

  return (
    <div className="sc-randomimages" onClick={changeImgAuto}>
      <Row>
        {Array(nbOfChildren)
          .fill(true)
          .map((_, i) => (
            <RandomImagesContainer
              key={i}
              imageToShow={imagesToShow[i]}
              img1={images[i][0]}
              img2={images[i][1]}
            />
          ))}
      </Row>
    </div>
  )
}

export default RandomImages
