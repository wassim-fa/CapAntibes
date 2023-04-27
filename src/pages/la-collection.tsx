import Languages from '@/enums/languages'
import Collection from '@/features/collection'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function CollectionPage() {
  return <Collection title={`La collection | Cap d'antibes Beach Hotel - Cote d Azur`} description={`Le Cap d'antibes Beach Hotel, situé sur la côte d'Azur, fait parti de la collection Adresses Hotels.`} />
}
