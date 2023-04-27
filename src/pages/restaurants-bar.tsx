import Languages from '@/enums/languages'
import Restaurants from '@/features/restaurants'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function RestaurantsBarPage() {
  return (
    <Restaurants
      title={`Restaurants Bar à Juan les pins | Cap d'antibes Beach Hotel`}
      description={`Deux restaurants à Juan les Pins aux personnalités singulières. Côté plage, Baba est un restaurant bar les pieds dans l’eau à l’ambiance festive. Côté gastronomie, Les Pêcheurs, un restaurant étoilé surplombant la Méditerranée. `}
    />
  )
}
