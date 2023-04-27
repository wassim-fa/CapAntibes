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
  return (
    <Galerie
      title={`Gallery | Hotel of cap d'antibes - French Rivieira`}
      description={`The photo gallery of hotel cap d'antibes beach hotel, a charming hotel on the French Riviera`}
    />
  )
}
