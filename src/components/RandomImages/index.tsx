import { useIsMobile } from '@/hooks'
import { useCallback, useEffect, useState } from 'react'
import * as S from './styles'
import Row from '../Row'
import Image, { StaticImageData } from 'next/image'

type RandomImagesContainerProps = {
  listImages: StaticImageData[]
  imageToShow: number | number
  img1: number
  img2: number
}
const RandomImagesContainer = ({
  listImages,
  imageToShow,
  img1,
  img2
}: RandomImagesContainerProps) => (
  <S.Wrapper data-imgtoshow={imageToShow}>
    <Image src={listImages[img1]} alt="liste d'images" />
    <Image src={listImages[img2]} alt="liste d'images" />
  </S.Wrapper>
)
interface RandomImagesProps {
  listImages: StaticImageData[]
}
const RandomImages = ({ listImages }: RandomImagesProps) => {
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
    const newImgId = (imgId + 1) % listImages.length
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
    nbOfChildren,
    listImages
  ])
  useEffect(() => {
    const interval = setInterval(() => {
      changeImgAuto()
    }, 2000)
    return () => clearInterval(interval)
  }, [changeImgAuto])

  useEffect(() => {
    console.log('imgId', imgId)
    console.log('images', images)
  }, [imgId, images])

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
              listImages={listImages}
            />
          ))}
      </Row>
    </div>
  )
}

export default RandomImages
