import Languages from '@/enums/languages'
import SeaViewRoom from '@/features/rooms/seaview'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function SeaViewPage() {
  return (
    <SeaViewRoom
      title={`Privilege room with sea view | Cap d'antibes Beach Hotel Rivieira`}
      description={`This is a large room in this Hotel de la Rivieira of 36 m2 with the bay of Antibes in the background. In the foreground, some elements of tropical vegetation.`}
      toBookLink="https://www.secure-hotel-booking.com/Cap-d-Antibes-Beach-Hotel/JK7H/en?hotelId=13829"
    />
  )
}
