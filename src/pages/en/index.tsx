import Languages from '@/enums/languages'
import Home from '@/features'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function IndexPage() {
  return (
    <Home
      title={`Cap d'antibes Beach Hotel | 5 star hotel - French Rivieira`}
      description={`On the French Riviera, discover the Cap d'Antibes Beach Hotel, 35 rooms and 5 stars. With its private beach, it is an address dedicated to the joy of living. The feet in the water between Cannes and Nice`}
    />
  )
}
