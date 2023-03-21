import * as S from './styles'
import { SwipeEventData, useSwipeable } from 'react-swipeable'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useRef, useState } from 'react'


const swipeConfig = {
  delta: { up: 2000, down: 2000 }, // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
  trackTouch: true, // track touch input
  trackMouse: false, // track mouse input
  rotationAngle: 0, // set a rotation angle
  swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true } // options for touch listeners (*See Details*)
}

interface CarrouselProps {
  images: StaticImageData[]
}
const Carrousel = ({ images }: CarrouselProps) => {
  const [showFirstTab, setShowFirstTab] = useState(true)
  const [currentImage, setCurrentImage] = useState(1);
  const imageRefs = useRef(images.map(() => null));

  const handleSwipe = (eventData: SwipeEventData) => {
    let nextValue = currentImage
    if (eventData.dir === "Left") {
      nextValue = (currentImage + 1) % images.length;
    } else if (eventData.dir === "Right") {
      nextValue = (currentImage - 1) % images.length;
    }
    if(nextValue < 0) {
      nextValue = images.length - 1
    }
    if (nextValue === (images.length-1) || nextValue === 0) {
      setShowFirstTab(!showFirstTab)
    }
    setCurrentImage(nextValue);
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: (event) => handleSwipe(Object.assign({}, event, { dir: "Left" })),
    onSwipedRight: (event) => handleSwipe(Object.assign({}, event, { dir: "Right" })),
    ...swipeConfig
  });

  const getClassName = (index: number) => {
    let state = ''

    if (index === currentImage) {
      state = 'car-active'
    } else if (index === (currentImage - 1)) {
      state = 'car-previous'
    } else if (index === currentImage + 1) {
      state = 'car-next'
    }

    return state
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleSwipe({ dir: "Left" } as SwipeEventData)
  //   }, 2000)
  //   return () => clearInterval(interval)
  // }, [handleSwipe])

  return (
    <S.Wrapper className="sc-carrousel" data-isshowfirst={showFirstTab} {...swipeHandlers}>
      <div>
        {images.map((src, index) => (
          <Image
            key={`0-${index}`}
            alt='carrousel avec des images'
            src={src}
            className={getClassName(index)}
            style={{
              position: "absolute",
              top: 0,
              zIndex: index === currentImage ? 1 : 0,
            }}
            ref={(element) => (imageRefs.current![index]! = element)}
          />
        ))}
      </div>
      <div>
        {images.map((src, index) => (
          <Image
            key={`1-${index}`}
            alt='carrousel avec des images'
            src={src}
            className={getClassName(index)}
            style={{
              position: "absolute",
              top: 0,
              zIndex: index === currentImage ? 1 : 0,
            }}
            ref={(element) => (imageRefs.current![index]! = element)}
          />
        ))}
      </div>
    </S.Wrapper>
  )
}
export default Carrousel
