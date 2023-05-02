import {
  contentsExecutiveRoom,
  contentsExecutiveRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/executive/random_0.png'
import random1 from '../../../public/assets/images/rooms/executive/random_1.png'
import room0 from '../../../public/assets/images/rooms/executive/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/executive/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function ExecutiveRoom(meta: IMetaPage) {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const menu = {
    left: '/suite',
    middle: '/chambre-et-suites',
    right: '/chambres-communicantes'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsExecutiveRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsExecutiveRoomItems}
      />
    </>
  )
}
