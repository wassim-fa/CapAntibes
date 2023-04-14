import Languages from '@/enums/languages'
import Rooms from '@/features/rooms'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function RoomsPage() {
  return <Rooms />
}
