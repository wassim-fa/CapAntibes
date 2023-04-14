import Languages from '@/enums/languages'
import LuxeRoom from '@/features/rooms/luxe'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.RU
    }
  }
}

export default function ConnectingPage() {
  return <LuxeRoom />
}
