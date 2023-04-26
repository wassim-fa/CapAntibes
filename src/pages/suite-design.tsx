import Languages from '@/enums/languages'
import DesignRoom from '@/features/rooms/design'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function DesignPage() {
  return <DesignRoom />
}
