import Languages from '@/enums/languages'
import ConnectingRoom from '@/features/rooms/connecting'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function ConnectingPage() {
  return <ConnectingRoom />
}
