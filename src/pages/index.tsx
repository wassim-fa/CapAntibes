import Languages from '@/enums/languages'
import Home from '@/features'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function IndexPage() {
  return <Home title={`Cap d'antibes Beach Hotel | Hotel 5 étoiles - Côte d'Azur`} description={`Sur la Côte d'Azur, découvrez le Cap d'antibes Beach Hotel, 35 chambres et 5 étoiles. Avec sa plage privée, c’est une adresse dédiée à la joie de vivre. Les pieds dans l’eau entre Cannes et Nice`} />
}
