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
  return <PrivilegeRoom title={`Privilege Room | A room in the French Rivieira`} description={`It is a room of the French Riviera of more than 36 m2. A large dressing room to store your things, ideal for long stays. `} />
}
