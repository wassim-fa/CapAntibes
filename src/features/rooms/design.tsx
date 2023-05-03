import { contentsDesignRoom, contentsDesignRoomItems } from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/design/random_0.jpg'
import random1 from '../../../public/assets/images/rooms/design/random_1.jpg'
import room0 from '../../../public/assets/images/rooms/design/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/design/room_0_mobile.jpg'
import { IRoomPage } from '@/interfaces'

export default function DesignRoom(props: IRoomPage) {
  const images = [random0, random1, room0]
  const imagesMobile = [random0, random1, room0Mobile]
  const menu = {
    left: '/chambre-privilege-vue-mer',
    middle: '/chambre-et-suites',
    right: '/suite-le-cap'
  }
  return (
    <>
      <RoomLayout
        meta={{ title: props.title, description: props.description }}
        menu={menu}
        content={contentsDesignRoom}
        toBookLink={props.toBookLink}
        images={images}
        imagesMobile={imagesMobile}
        items={contentsDesignRoomItems}
      />
    </>
  )
}
