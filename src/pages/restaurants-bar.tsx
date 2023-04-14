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
  return <Restaurants />
}
