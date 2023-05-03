import {
  contentsExecutiveRoom,
  contentsExecutiveRoomItems
} from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/executive/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/executive/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/executive/room_0.jpg'
import room0Mobile from '../../../public/assets/images/rooms/executive/room_0_mobile.jpg'
import { IRoomPage } from '@/interfaces'

export default function ExecutiveRoom(props: IRoomPage) {
  const images = [random0, random1, room0]
  const imagesMobile = [random0, random1, room0Mobile]
  const menu = {
    left: '/suite',
    middle: '/chambre-et-suites',
    right: '/chambres-communicantes'
  }
  return (
    <>
      <RoomLayout
        meta={{ title: props.title, description: props.description }}
        menu={menu}
        content={contentsExecutiveRoom}
        toBookLink={props.toBookLink}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsExecutiveRoomItems}
      />
    </>
  )
}
