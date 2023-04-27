import { contentsLuxeRoom, contentsLuxeRoomItems } from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/luxe/random_0.png'
import random1 from '../../../public/assets/images/rooms/luxe/random_1.png'
import room0 from '../../../public/assets/images/rooms/luxe/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/luxe/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function LuxeRoom(meta: IMetaPage) {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const menu = {
    left: '/chambres-communicantes',
    middle: '/chambre-et-suites',
    right: '/chambre-privilege-vue-mer'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsLuxeRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsLuxeRoomItems}
      />
    </>
  )
}
