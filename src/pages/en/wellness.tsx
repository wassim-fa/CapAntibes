import Languages from '@/enums/languages'
import WellHealth from '@/features/well-health'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function WellHealthPage() {
  return <WellHealth title={`Wellness | The Spa in Antibes Juan les pins`} description={`Water, wind, and the warmth of the sun. The natural elements are present in their strength and beauty in Antibes Juan Les Pins. The perfect setting to recharge and take care of your body and soul.`} />
}
