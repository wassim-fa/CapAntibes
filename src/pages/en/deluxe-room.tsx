import Languages from '@/enums/languages'
import LuxeRoom from '@/features/rooms/luxe'

export async function getStaticProps() {
  return {
    props: {
      language: Languages.EN
    }
  }
}

export default function DeluxePage() {
  return (
    <LuxeRoom
      title={`Deluxe Room | Cap d'antibes Beach Hotel *****`}
      description={`The Deluxe room is refined and invites serenity. It overlooks the garden or has a private terrace for the one upstairs.`}
      toBookLink="https://www.secure-hotel-booking.com/Cap-d-Antibes-Beach-Hotel/JK7H/en?hotelId=13829"
    />
  )
}
