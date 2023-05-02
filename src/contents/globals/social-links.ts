import Socials from '@/enums/socials'
import { ILinkContent } from '@/interfaces'

export const contentsSocialLinks: Record<Socials, ILinkContent> = {
  [Socials.WHATSAPP]: {
    label: 'WhatsApp',
    link: '/'
  },
  [Socials.FACEBOOK]: {
    label: 'Facebook',
    link: 'https://www.facebook.com/antibesbeachhotel/'
  },
  [Socials.INSTAGRAM]: {
    label: 'Instagram',
    link: 'https://www.instagram.com/capdantibesbeachhotel/'
  },
  [Socials.LINKEDIN]: {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/company/35678536/admin/'
  }
}
