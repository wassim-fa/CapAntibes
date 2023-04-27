import Languages from '@/enums/languages'
import Rooms from '@/features/rooms'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function RoomsPage() {
  return <Rooms title={`Les Chambres | Hôtel 5 étoiles - Sud de la France`} description={`Les chambres Deluxe et Privilège de l'hotel Cap d'Antibes Beach Hotel, dans le sud de la France, donnent sur des jardins ou terrasses privées. Les vastes suites offrent des points de vue spectaculaires sur la baie. `} />
}
