import Languages from '@/enums/languages'
import Address from '@/features/address'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function LocalisationPage() {
  return <Address />
}
