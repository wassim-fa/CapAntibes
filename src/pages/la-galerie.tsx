import Languages from '@/enums/languages'
import Galerie from '@/features/galerie'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function GaleriePage() {
  return <Galerie />
}
