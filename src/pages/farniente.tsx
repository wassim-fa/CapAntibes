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
  return <Farniente title={`Farniente | Détente au Cap d'antibes Beach Hotel`} description={`Le Beach Hôtel et son trésor : la plage privée des Pêcheurs. Oisiveté sur un bain de soleil, cocktails entre amis ou promenades en pédalo. Le soleil brille, le temps suspend son vol.`} />
}
