import Languages from '@/enums/languages'
import PrivilegeRoom from '@/features/rooms/privilege'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function PrivilegePage() {
  return <PrivilegeRoom />
}
