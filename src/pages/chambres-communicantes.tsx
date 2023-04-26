import Languages from '@/enums/languages'
import ConnectingRoom from '@/features/rooms/connecting'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function CommunicantePage() {
  return <ConnectingRoom />
}
