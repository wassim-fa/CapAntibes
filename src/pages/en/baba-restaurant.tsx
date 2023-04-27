import Languages from '@/enums/languages'
import BabaRestaurant from '@/features/restaurants/baba'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function RestaurantsBaBaPage() {
  return <BabaRestaurant title={`Baba Restaurant-Bar  Beach | Signed Assaf Granit`} description={`Baba is orchestrated by chef Assaf Granit, the soul of iconic places around the world: Le Balagan or Tekes in Paris, Machneyuda in Jerusalem, the Coal Office in London. From the sandy restaurant and its terrace, to the bar, to the beach, you are caught up in a euphoric joie de vivre.`} />
}
