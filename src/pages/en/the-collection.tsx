import Languages from '@/enums/languages'
import Collection from '@/features/collection'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function CollectionPage() {
  return <Collection title={`The collection | Cap d'antibes Beach Hotel - Frenc Rivieira`} description={`The Cap d'antibes Beach Hotel, located on the French Riviera, is part of the Adresses Hotels collection.`} />
}
