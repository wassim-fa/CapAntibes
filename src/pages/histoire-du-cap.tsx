import Languages from '@/enums/languages'
import History from '@/features/history'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function HistoryPage() {
  return (
    <History
      title={`L'histoire | Cap d'antibes Beach Hotel  - Juan les pins`}
      description={`Le Cap d’Antibes Beach Hôtel est l’une des adresses iconiques de la Côte d’Azur. Sur la plage des Pêcheurs, à Juan les Pins, se mêlent depuis toujours les familles, venues profiter des bains de mer et les amis de la nuit.`}
    />
  )
}
