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
  return <Home />
}
