import {
  contentsPrivilegeRoom,
  contentsPrivilegeRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/privilege/random_0.png'
import random1 from '../../../public/assets/images/rooms/privilege/random_1.png'
import room0 from '../../../public/assets/images/rooms/privilege/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/privilege/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function PrivilegeRoom(meta: IMetaPage) {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const menu = {
    left: '/chambre-privilege-vue-mer',
    middle: '/chambre-et-suites',
    right: '/suite'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsPrivilegeRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsPrivilegeRoomItems}
      />
    </>
  )
}
