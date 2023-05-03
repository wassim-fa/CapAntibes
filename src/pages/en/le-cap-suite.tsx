import Languages from '@/enums/languages'
import ExecutiveRoom from '@/features/rooms/executive'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function ExecutivePage() {
  return (
    <ExecutiveRoom
      title={`Suite Le Cap | Cap d'antibes Beach Hotel - 5 stars`}
      description={`The iconic room of the hotel. Sunny, intoxicating. The Suite le Cap in Antibes, 66 m2 with terrace, is as if suspended above the water. `}
      toBookLink="https://www.secure-hotel-booking.com/Cap-d-Antibes-Beach-Hotel/JK7H/en?hotelId=13829"
    />
  )
}
