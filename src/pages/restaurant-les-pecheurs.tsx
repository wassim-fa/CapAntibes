import Languages from '@/enums/languages'
import PecheursRestaurant from '@/features/restaurants/pecheurs'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function PecheursPage() {
  return <PecheursRestaurant title={`Les Pêcheurs | Restaurant gastronomique - Cap d'antibes`} description={`Les Pêcheurs, ce restaurant à Cap d'antibes , une étoile au Guide Michelin, est une institution de la cuisine méditerranéenne. Par la vaste baie vitrée ou depuis la terrasse, une vue plongeante s’offre sur la côte.`} />
}
