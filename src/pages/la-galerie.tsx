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
  return (
    <Galerie
      title={`Galerie | Hôtel du cap d'antibes - Côte d'azur`}
      description={`La Galerie photo de l'hôtel du cap d'antibes beach hotel, un hotel de charme sur la côte d'Azur`}
    />
  )
}
