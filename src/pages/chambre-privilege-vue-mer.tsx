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
  return <SeaViewRoom />
}
