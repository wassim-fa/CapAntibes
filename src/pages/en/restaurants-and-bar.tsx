import Languages from '@/enums/languages'
import Restaurants from '@/features/restaurants'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function RestaurantsBarPage() {
  return (
    <Restaurants
      title={`Restaurants Bar à Juan les pins | Cap d'antibes Beach Hotel`}
      description={`There are two restaurants in Juan les Pins with unique personalities. On the beachside, Baba is a festive restaurant bar right on the water. For gourmet dining, Les Pêcheurs is a Michelin-starred restaurant overlooking the Mediterranean.`}
    />
  )
}
