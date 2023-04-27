import Languages from '@/enums/languages'
import PecheursRestaurant from '@/features/restaurants/pecheurs'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function PecheursPage() {
  return (
    <PecheursRestaurant
      title={`Les Pêcheurs | Gastronomic restaurant - Cap d'antibes`}
      description={`Les Pêcheurs, this restaurant in Cap d'Antibes, with one Michelin star, is an institution of Mediterranean cuisine. Through the large bay window or from the terrace, you can enjoy a breathtaking view of the coast.`}
    />
  )
}
