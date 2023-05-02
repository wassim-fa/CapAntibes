import { contentsSeaViewRoom, contentsSeaViewRoomItems } from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/seaview/random_0.png'
import random1 from '../../../public/assets/images/rooms/seaview/random_1.png'
import room0 from '../../../public/assets/images/rooms/seaview/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/seaview/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function SeaViewRoom(meta: IMetaPage) {
  const images = [random0, random1, room0]
  const imagesMobile = [random0, random1, room0Mobile]
  const menu = {
    left: '/chambre-privilege',
    middle: '/chambre-et-suites',
    right: '/suite'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsSeaViewRoom}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsSeaViewRoomItems}
      />
    </>
  )
}
