import Languages from '@/enums/languages'
import DesignRoom from '@/features/rooms/design'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function DesignPage() {
  return <DesignRoom title={`Suite on the French Riviera | Cap d'antibes Beach Hotel`} description={`This Suite of the French Riviera, offer breathtaking views of the landscape. The bathrooms are equipped with large bathtubs or rain showers. `} />
}
