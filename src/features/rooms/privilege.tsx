import {
  contentsPrivilegeRoom,
  contentsPrivilegeRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/privilege/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/privilege/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/privilege/room_0.jpg'
import room0Mobile from '../../../public/assets/images/rooms/privilege/room_0_mobile.jpg'
import { IMetaPage } from '@/interfaces'

export default function PrivilegeRoom(meta: IMetaPage) {
  const images = [random0, random1, room0]
  const imagesMobile = [random0, random1, room0Mobile]
  const menu = {
    left: '/chambre-deluxe',
    middle: '/chambre-et-suites',
    right: '/chambre-privilege-vue-mer'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsPrivilegeRoom}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsPrivilegeRoomItems}
      />
    </>
  )
}
