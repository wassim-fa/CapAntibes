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
  return (
    <ConnectingRoom
      title={`Chambres communicantes | Cap d'antibes Beach Hotel`}
      description={`La chambre familiale réunit deux chambres en un appartement disposant de deux salles de bains. La solution idéale pour un voyage en famille ou entre amis. `}
    />
  )
}
