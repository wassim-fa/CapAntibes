import Languages from '@/enums/languages'
import Farniente from '@/features/farniente'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function FarnientePage() {
  return (
    <Farniente
      title={`Farniente | Relaxation at Cap d'antibes Beach Hotel`}
      description={`The Beach Hotel and its treasure: the private beach of Les Pêcheurs. Lounging on a sun lounger, cocktails with friends, or pedalo rides. The sun shines, time stands still.`}
    />
  )
}
