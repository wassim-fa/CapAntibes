import * as S from './styles'
import { SwipeEventData, useSwipeable } from 'react-swipeable'
import random0 from '../../../public/assets/images/home/random0.png'
import random1 from '../../../public/assets/images/home/random1.png'
import random2 from '../../../public/assets/images/home/random2.png'
import random3 from '../../../public/assets/images/home/random3.png'
import random4 from '../../../public/assets/images/home/random4.png'
import random5 from '../../../public/assets/images/home/random5.png'
import random6 from '../../../public/assets/images/home/random6.png'
import random7 from '../../../public/assets/images/home/random7.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const randomsImages = [
  random0,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7,
  random0,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7,
  random0,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7,
  random0,
  random1,
  random2,
  random3,
  random4,
  random5,
  random6,
  random7
]
const swipeConfig = {
  delta: { up: 2000, down: 2000 }, // min distance(px) before a swipe starts. *See Notes*
  preventScrollOnSwipe: false, // prevents scroll during swipe (*See Details*)
  trackTouch: true, // track touch input
  trackMouse: false, // track mouse input
  rotationAngle: 0, // set a rotation angle
  swipeDuration: Infinity, // allowable duration of a swipe (ms). *See Notes*
  touchEventOptions: { passive: true } // options for touch listeners (*See Details*)
}
const Carrousel = () => {
  const [currentImage, setCurrentImage] = useState(Math.round(randomsImages.length/2));
  const imageRefs = useRef(randomsImages.map(() => null));

  const handleSwipe = (eventData: SwipeEventData) => {
    if (eventData.dir === "Left") {
      setCurrentImage((currentImage + 1) % randomsImages.length);
    } else if (eventData.dir === "Right") {
      setCurrentImage((currentImage - 1) % randomsImages.length);
    }
  };
  
  const swipeHandlers = useSwipeable({
    onSwipedLeft: (event) => handleSwipe(Object.assign({}, event, {dir: "Left"})),
    onSwipedRight: (event) => handleSwipe(Object.assign({}, event, {dir: "Right"})),
    ...swipeConfig
  });

  const getClassName = (index: number) => {
    let state = ''

    if(index === currentImage) {
      state = 'car-active'
    } else if(index === (currentImage - 1)) {
      state = 'car-previous'
    } else if(index === currentImage + 1) {
      state = 'car-next'
    }

    return state
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleSwipe({dir: "Left"} as SwipeEventData)
    }, 2000)
    return () => clearInterval(interval)
  }, [handleSwipe])
 
  return (
    <S.Wrapper className="sc-carrousel" data-current={currentImage} {...swipeHandlers}>
      {randomsImages.map((src, index) => (
        <Image
          key={index}
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
    </S.Wrapper>
  )
}
export default Carrousel
