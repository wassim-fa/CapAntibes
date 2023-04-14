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
  return <BabaRestaurant />
}
