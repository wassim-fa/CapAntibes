import Languages from '@/enums/languages'
import PrivilegeRoom from '@/features/rooms/privilege'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.FR
    }
  }
}

export default function PrivilegePage() {
  return (
    <PrivilegeRoom
      title={`Chambre Privilege | Une chambre sur la côte d'Azur`}
      description={`C’est une chambre de la Côte d'Azur de plus de 36 m2. Un grand dressing pour ranger ses affaires, idéal pour de longs séjours. `}
      toBookLink="https://www.secure-hotel-booking.com/Cap-d-Antibes-Beach-Hotel/JK7H/fr?hotelId=13829"
    />
  )
}
