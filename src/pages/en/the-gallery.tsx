import Languages from '@/enums/languages'
import Galerie from '@/features/galerie'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function GaleriePage() {
  return <Galerie />
}
