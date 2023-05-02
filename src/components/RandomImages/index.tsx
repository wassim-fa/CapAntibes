import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import Row from '../Row'
import Image, { StaticImageData } from 'next/image'

type RandomImagesContainerProps = {
  imageToShow: number | number
  img1: StaticImageData
  img2: StaticImageData
}
const RandomImagesContainer = ({
  imageToShow,
  img1,
  img2
}: RandomImagesContainerProps) => (
  <S.Wrapper data-imgtoshow={imageToShow}>
    <Image src={img1} alt="liste d'images" />
    <Image src={img2} alt="liste d'images" />
  </S.Wrapper>
)

interface RandomImagesProps {
  listImages: StaticImageData[]
}
const RandomImages = ({ listImages }: RandomImagesProps) => {
  const [imgId, setImgId] = useState<number>(2)
  const [componentActive, setComponentActive] = useState<number>(1)
  const [images, setImages] = useState<[number, number][]>([
    [0, 1],
    [2, 3]
  ])
  const [imagesToShow, setImagesToShow] = useState<[number, number]>([0, 0])

  const changeImgAuto = useCallback(() => {
    const _imagesToShow = imagesToShow
    const _images = images

    // Change visibility of new active component
    const newComponentActive = (componentActive + 1) % 2
    if(_imagesToShow[newComponentActive] === 0) {
      _imagesToShow[newComponentActive] = 1
    } else {
      _imagesToShow[newComponentActive] = 0
    }

    // Change hidden image of inactive component
    const newImgId = (imgId + 1) % listImages.length
    if(_imagesToShow[componentActive] === 0) {
      _images[componentActive][1] = newImgId
    } else {
      _images[componentActive][0] = newImgId
    }
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
    listImages
  ])
  useEffect(() => {
    const interval = setInterval(() => {
      changeImgAuto()
    }, 3000)
    return () => clearInterval(interval)
  }, [changeImgAuto])

  return (
    <div className="sc-randomimages" onClick={changeImgAuto}>
      <Row>
        <RandomImagesContainer
          imageToShow={imagesToShow[0]}
          img1={listImages[images[0][0]]}
          img2={listImages[images[0][1]]}
        />
        <RandomImagesContainer
          imageToShow={imagesToShow[1]}
          img1={listImages[images[1][0]]}
          img2={listImages[images[1][1]]}
        />
      </Row>
    </div>
  )
}

export default RandomImages
