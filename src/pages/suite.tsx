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
  return (
    <DesignRoom
      title={`Suite sur la côte d'azur | Cap d'antibes Beach Hotel`}
      description={`Cette Suite de la côte d'Azur, offrent des perspectives imprenables sur le paysage. Les salles de bains sont équipées de grandes baignoires ou de douches ciel de pluie. `}
      toBookLink="https://www.secure-hotel-booking.com/Cap-d-Antibes-Beach-Hotel/JK7H/fr?hotelId=13829"
    />
  )
}
