import Languages from '@/enums/languages'
import LuxeRoom from '@/features/rooms/luxe'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function SeaViewPage() {
  return <LuxeRoom />
}
