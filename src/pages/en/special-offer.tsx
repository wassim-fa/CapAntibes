import Languages from '@/enums/languages'
import SpecialsOffers from '@/features/specialsoffers'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function SpecialOffersPage() {
  return <SpecialsOffers title={`Special Offers | 5 stars Hotel  in Cap d'antibes`} description={`Official Site - Best Rates Guaranteed | 5 star hotel in Cap d'antibes | Consult our special offers exclusively available on our website.`} />
}
