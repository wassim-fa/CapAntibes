import Languages from '@/enums/languages'
import History from '@/features/history'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function HistoryPage() {
  return <History />
}
