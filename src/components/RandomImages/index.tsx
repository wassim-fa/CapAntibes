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
  const [imgId, setImgId] = useState<number>(3)
  const [componentActive, setComponentActive] = useState<number>(0)
  const [images, setImages] = useState<[number, number][]>([
    [0, 1],
    [2, 3]
  ])
  const [imagesToShow, setImagesToShow] = useState<[number, number]>([0, 0])

  const changeImgAuto = useCallback(() => {
    const newImgId = (imgId + 1) % listImages.length
    const newComponentActive = (componentActive + 1) % 2
    const _imagesToShow = imagesToShow
    _imagesToShow[newComponentActive] =
      (imagesToShow[newComponentActive] + 1) % 2
    const _images = images
    _images[newComponentActive][_imagesToShow[newComponentActive]] = newImgId

    // console.log({
    //   newImgId: newImgId,
    //   imagesToShow: _imagesToShow,
    //   newComponentActive: newComponentActive,
    //   images: _images
    // })
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
    }, 2000)
    return () => clearInterval(interval)
  }, [changeImgAuto])

  // useEffect(() => {
  //   console.log('imgId', imgId)
  //   console.log('images', images)
  //   console.log('imagesToShow', imagesToShow)
  // }, [imgId, images, imagesToShow])

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
