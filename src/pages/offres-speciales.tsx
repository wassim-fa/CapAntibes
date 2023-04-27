import Languages from '@/enums/languages'
import SpecialsOffers from '@/features/specialsoffers'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function SpecialOffersPage() {
  return <SpecialsOffers title={`Offres Spéciales | Hotel 5 étoiles au Cap d'antibes`} description={`Site Officiel - Meilleurs tarifs garantis | Hotel 5 étoiles Cap d'antibes | Consultez nos offres spéciales exclusivement disponibles sur notre site internet .`} />
}
