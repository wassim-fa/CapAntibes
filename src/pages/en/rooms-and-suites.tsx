import Languages from '@/enums/languages'
import Rooms from '@/features/rooms'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function RoomsPage() {
  return (
    <Rooms
      title={`The Rooms | 5 stars Hotel - South of France`}
      description={`Deluxe and Privilege rooms at the Cap d'Antibes Beach Hotel in the south of France overlook private gardens or terraces. The large suites offer spectacular views of the bay. `}
    />
  )
}
