import { contentsLuxeRoom, contentsLuxeRoomItems } from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/luxe/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/luxe/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/luxe/room_0.jpg'
import room0Mobile from '../../../public/assets/images/rooms/luxe/room_0_mobile.jpg'
import { IMetaPage } from '@/interfaces'

export default function LuxeRoom(meta: IMetaPage) {
  const images = [random0, random1, room0]
  const imagesMobile = [random0, random1, room0Mobile]
  const menu = {
    left: '/suite-le-cap',
    middle: '/chambre-et-suites',
    right: '/chambre-privilege'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsLuxeRoom}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsLuxeRoomItems}
      />
    </>
  )
}
