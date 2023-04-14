import Languages from '@/enums/languages'
import WellHealth from '@/features/well-health'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function WellHealthPage() {
  return <WellHealth />
}
