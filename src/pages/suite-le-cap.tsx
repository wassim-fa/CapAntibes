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
  return (
    <ExecutiveRoom
      title={`Suite Le Cap| Cap d'antibes Beach Hotel - 5 étoiles`}
      description={`La chambre iconique de l’hôtel. Ensoleillée, enivrante. La Suite le Cap à Antibes,  de 66 m2 avec terrasse, est comme suspendue au-dessus de l’eau. `}
      toBookLink="https://www.secure-hotel-booking.com/Cap-d-Antibes-Beach-Hotel/JK7H/fr?hotelId=13829"
    />
  )
}
