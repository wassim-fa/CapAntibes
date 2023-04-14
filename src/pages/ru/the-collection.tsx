import Languages from '@/enums/languages'
import Collection from '@/features/collection'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.RU
    }
  }
}

export default function CollectionPage() {
  return <Collection />
}
