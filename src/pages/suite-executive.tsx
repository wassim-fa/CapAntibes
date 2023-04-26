import Languages from '@/enums/languages'
import ExecutiveRoom from '@/features/rooms/executive'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function ExecutivePage() {
  return <ExecutiveRoom />
}
