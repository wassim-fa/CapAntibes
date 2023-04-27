import Languages from '@/enums/languages'
import WellHealth from '@/features/well-health'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function WellHealthPage() {
  return (
    <WellHealth
      title={`Bien-être | Le Spa à Antibes Juan les pins`}
      description={`L’eau, le vent et la chaleur du soleil. Les éléments naturels sont présents dans leur force et leur beauté à Antibes Juan les Pins. Le cadre idéal pour se ressourcer et prendre soin de son corps et son âme.`}
    />
  )
}
