import Socials from '@/enums/socials'
import { ILinkContent } from '@/interfaces'

export const contentsSocialLinks: Record<Socials, ILinkContent> = {
  [Socials.WHATSAPP]: {
    label: 'WhatsApp',
    link: '/'
  },
  [Socials.FACEBOOK]: {
    label: 'Facebook',
    link: '/'
  },
  [Socials.INSTAGRAM]: {
    label: 'Instagram',
    link: '/'
  },
  [Socials.LINKEDIN]: {
    label: 'Linkedin',
    link: '/'
  }
}
