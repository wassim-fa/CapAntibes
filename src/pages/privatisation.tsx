import Languages from '@/enums/languages'
import Privatisation from '@/features/privatisation'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function PrivatisationPage() {
  return <Privatisation title={`Privatisation | Hotel Côte d'Azur`} description={`Moment unique et lieu unique. Le Beach Hotel cote d azur peut être privatisé pour un événement, un mariage ou une célébration qui vous tient particulièrement à coeur. Toute la magie du Beach Hôtel Cap d’Antibes, rien que pour vous. `} />
}
