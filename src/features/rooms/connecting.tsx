import {
  contentsConnectingRoom,
  contentsConnectingRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/connecting/random_0.png'
import random1 from '../../../public/assets/images/rooms/connecting/random_1.png'
import room0 from '../../../public/assets/images/rooms/connecting/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/connecting/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function ConnectingRoom(meta: IMetaPage) {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const menu = {
    left: '/suite-executive',
    middle: '/chambre-et-suites',
    right: '/chambre-deluxe'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsConnectingRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsConnectingRoomItems}
      />
    </>
  )
}
