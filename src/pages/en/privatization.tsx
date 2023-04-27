import Languages from '@/enums/languages'
import Privatisation from '@/features/privatisation'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function PrivatisationPage() {
  return (
    <Privatisation
      title={`Privatization | Hotel Côte d'Azur`}
      description={`Unique moment and unique location. The Beach Hotel cote d azur can be privatized for an event, wedding, or celebration that is particularly dear to your heart. All the magic of the Beach Hotel Cap d’Antibes, just for you. `}
    />
  )
}
