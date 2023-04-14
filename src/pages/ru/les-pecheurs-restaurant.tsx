import Languages from '@/enums/languages'
import PecheursRestaurant from '@/features/restaurants/pecheurs'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.RU
    }
  }
}

export default function PecheursPage() {
  return <PecheursRestaurant />
}
