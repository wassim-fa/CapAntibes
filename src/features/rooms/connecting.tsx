import {
  contentsConnectingRoom,
  contentsConnectingRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/connecting/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/connecting/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/connecting/room_0.jpg'
import room0Mobile from '../../../public/assets/images/rooms/connecting/room_0_mobile.jpg'
import { IMetaPage } from '@/interfaces'

export default function ConnectingRoom(meta: IMetaPage) {
  const images = [random0, random1, room0]
  const imagesMobile = [random0, random1, room0Mobile]
  const menu = {
    left: '/suite-le-cap',
    middle: '/chambre-et-suites',
    right: '/chambre-deluxe'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsConnectingRoom}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsConnectingRoomItems}
      />
    </>
  )
}
