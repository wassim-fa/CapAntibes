import { contentsDesignRoom, contentsDesignRoomItems } from '@/contents/pages'
import { useText } from '@/hooks'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/design/random_0.png'
import random1 from '../../../public/assets/images/rooms/design/random_1.png'
import room0 from '../../../public/assets/images/rooms/design/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/design/room_0_mobile.png'

export default function DesignRoom() {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const meta = {
    title: useText(contentsDesignRoom['title']),
    description: useText(contentsDesignRoom['description'])
  }
  const menu = {
    left: '/chambre-privilege',
    middle: '/chambre-et-suites',
    right: '/suite-executive'
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
