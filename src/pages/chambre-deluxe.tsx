import Languages from '@/enums/languages'
import LuxeRoom from '@/features/rooms/luxe'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function DeluxePage() {
  return <LuxeRoom title={`Chambre Deluxe | Cap d'antibes Beach Hotel *****`} description={`La chambre Deluxe est épurée et invite à la sérénité. Elle donne directement sur le jardin ou dispose d’une terrasse privée pour celle à l’étage.`} />
}
