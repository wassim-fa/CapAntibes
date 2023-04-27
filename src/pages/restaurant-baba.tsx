import Languages from '@/enums/languages'
import BabaRestaurant from '@/features/restaurants/baba'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function RestaurantsBaBaPage() {
  return <BabaRestaurant title={`Baba Restaurant-Bar plage |  Signé Assaf Granit`} description={`Baba est orchestré par le chef Assaf Granit, âme de lieux iconiques dans le monde : Le Balagan ou Tekes à Paris, Machneyuda à Jérusalem, le Coal Office à Londres. Du restaurant en bord de sable et sa terrasse, au bar, à la plage, vous êtes pris dans une  joie de vivre euphorisante.`} />
}
