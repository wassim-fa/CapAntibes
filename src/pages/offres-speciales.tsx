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
  return <SpecialsOffers />
}
