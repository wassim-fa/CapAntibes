import Languages from '@/enums/languages'
import SeaViewRoom from '@/features/rooms/seaview'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function SeaViewPage() {
  return <SeaViewRoom title={`Chambre Privilege vue mer | Cap d'antibes Beach Hotel Rivieira`} description={`C’est une grande chambre dans cet Hotel de la Rivieira de 36 m2 avec la baie d’Antibes en toile de fond. Au premier plan, quelques éléments de végétation tropicale. `} />
}
