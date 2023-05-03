import {
  contentsPrivilegeRoom,
  contentsPrivilegeRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/privilege/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/privilege/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/privilege/room_0.jpg'
import room0Mobile from '../../../public/assets/images/rooms/privilege/room_0_mobile.jpg'
import { IRoomPage } from '@/interfaces'

export default function PrivilegeRoom(props: IRoomPage) {
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
        meta={{ title: props.title, description: props.description }}
        menu={menu}
        content={contentsPrivilegeRoom}
        toBookLink={props.toBookLink}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsPrivilegeRoomItems}
      />
    </>
  )
}
