import { contentsLuxeRoom, contentsLuxeRoomItems } from '@/contents/pages'
import { useText } from '@/hooks'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/luxe/random_0.png'
import random1 from '../../../public/assets/images/rooms/luxe/random_1.png'
import luxe0 from '../../../public/assets/images/rooms/luxe/luxe_0.png'
import luxe0Mobile from '../../../public/assets/images/rooms/luxe/luxe_0_mobile.png'

export default function LuxeRoom() {
  const randomsImages = [random0, random1]
  const meta = {
    title: useText(contentsLuxeRoom.title),
    description: useText(contentsLuxeRoom.description)
  }
  const menu = {
    left: '/chambre-privilege',
    middle: '/chambre-et-suites',
    right: '/chambre-privilege'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsLuxeRoom}
        randomsImages={randomsImages}
        image={luxe0}
        imageMobile={luxe0Mobile}
        items={contentsLuxeRoomItems}
      />
    </>
  )
}
