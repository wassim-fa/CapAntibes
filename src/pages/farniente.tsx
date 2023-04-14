import Languages from '@/enums/languages'
import Farniente from '@/features/farniente'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function FarnientePage() {
  return <Farniente />
}
