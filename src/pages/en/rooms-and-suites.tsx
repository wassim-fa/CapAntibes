import Languages from '@/enums/languages'
import Rooms from '@/features/rooms'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function RoomsPage() {
  return <Rooms />
}
