import { contentsDesignRoom, contentsDesignRoomItems } from '@/contents/pages'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/design/random_0.png'
import random1 from '../../../public/assets/images/rooms/design/random_1.png'
import room0 from '../../../public/assets/images/rooms/design/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/design/room_0_mobile.png'
import { IMetaPage } from '@/interfaces'

export default function DesignRoom(meta: IMetaPage) {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const menu = {
    left: '/chambre-privilege',
    middle: '/chambre-et-suites',
    right: '/suite-le-cap'
  }
  return (
    <>
      <RoomLayout
        meta={meta}
        menu={menu}
        content={contentsDesignRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsDesignRoomItems}
      />
    </>
  )
}
