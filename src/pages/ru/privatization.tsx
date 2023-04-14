import Languages from '@/enums/languages'
import Privatisation from '@/features/privatisation'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.RU
    }
  }
}

export default function PrivatisationPage() {
  return <Privatisation />
}
