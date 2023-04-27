import Languages from '@/enums/languages'
import History from '@/features/history'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function HistoryPage() {
  return <History title={`The story | Cap d'antibes Beach Hotel - Juan les pins`} description={`The Cap d'Antibes Beach Hotel is one of the iconic addresses of the French Riviera. Families have always mixed with night-time revelers on the Plage des Pêcheurs, at Juan les Pins, coming to enjoy the sea baths. `} />
}
