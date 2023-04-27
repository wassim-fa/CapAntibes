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
  return <ConnectingRoom title={`Connecting rooms| Cap d'antibes Beach Hotel`} description={`The family room combines two rooms into one apartment with two bathrooms. The ideal solution for a trip with family or friends.`} />
}
