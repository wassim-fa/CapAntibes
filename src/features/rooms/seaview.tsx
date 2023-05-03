import { contentsSeaViewRoom, contentsSeaViewRoomItems } from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/seaview/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/seaview/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/seaview/room_0.jpg'
import room0Mobile from '../../../public/assets/images/rooms/seaview/room_0_mobile.jpg'
import { IRoomPage } from '@/interfaces'

export default function SeaViewRoom(props: IRoomPage) {
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
        meta={{ title: props.title, description: props.description }}
        menu={menu}
        content={contentsSeaViewRoom}
        toBookLink={props.toBookLink}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsSeaViewRoomItems}
      />
    </>
  )
}
