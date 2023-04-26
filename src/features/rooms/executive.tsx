import { contentsExecutiveRoom, contentsExecutiveRoomItems } from '@/contents/pages'
import { useText } from '@/hooks'
import RoomLayout from '@/layouts/room'
import random0 from '../../../public/assets/images/rooms/executive/random_0.png'
import random1 from '../../../public/assets/images/rooms/executive/random_1.png'
import room0 from '../../../public/assets/images/rooms/executive/room_0.png'
import room0Mobile from '../../../public/assets/images/rooms/executive/room_0_mobile.png'

export default function ExecutiveRoom() {
  const randomsImages = [random0, random1, random0, random1, random0, random1]
  const meta = {
    title: useText(contentsExecutiveRoom['title']),
    description: useText(contentsExecutiveRoom['description'])
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
        content={contentsExecutiveRoom}
        randomsImages={randomsImages}
        image={room0}
        imageMobile={room0Mobile}
        items={contentsExecutiveRoomItems}
      />
    </>
  )
}
