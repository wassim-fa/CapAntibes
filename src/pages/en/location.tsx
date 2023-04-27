import Languages from '@/enums/languages'
import Address from '@/features/address'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function LocalisationPage() {
  return <Address title={`Location | Beach Hotel Cap d'antibes - 5 stars`} description={``} />
}
