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
  return (
    <Address
      title={`L'adresse | Beach Hotel Cap d'antibes - 5 étoiles`}
      description={`Retrouvez les coordonnées du Beach Hotel Cap d'antibes, un hotel 5 étoiles authentique `}
    />
  )
}
