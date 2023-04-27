import { contentsSeaViewRoom, contentsSeaViewRoomItems } from '@/contents/pages'
import { useText } from '@/hooks'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/seaview/random_0.png'
import random1 from '../../../public/assets/images/rooms/seaview/random_1.png'
import room0 from '../../../public/assets/images/rooms/seaview/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/seaview/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function SeaViewRoom(meta: IMetaPage) {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const menu = {
    left: '/chambre-deluxe',
    middle: '/chambre-et-suites',
    right: '/chambre-privilege'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsSeaViewRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsSeaViewRoomItems}
      />
    </>
  )
}
