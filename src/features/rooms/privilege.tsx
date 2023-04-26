import { contentsPrivilegeRoom, contentsPrivilegeRoomItems } from '@/contents/pages'
import { useText } from '@/hooks'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/privilege/random_0.png'
import random1 from '../../../public/assets/images/rooms/privilege/random_1.png'
import room0 from '../../../public/assets/images/rooms/privilege/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/privilege/room_0_mobile.png'

export default function PrivilegeRoom() {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const meta = {
    title: useText(contentsPrivilegeRoom['title']),
    description: useText(contentsPrivilegeRoom['description'])
  }
  const menu = {
    left: '/chambre-privilege',
    middle: '/chambre-et-suites',
    right: '/chambre-privilege'
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
