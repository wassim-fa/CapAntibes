import Socials from '@/enums/socials'
import { ILinkContent } from '@/interfaces'

export const contentsSocialLinks: Record<Socials, ILinkContent> = {
  [Socials.WHATSAPP]: {
    label: 'WhatsApp',
    link: '/',
    linkRestoPecheur: '/',
    linkRestoBaba: 'https://www.google.com/'
  },
  [Socials.FACEBOOK]: {
    label: 'Facebook',
    link: 'https://www.facebook.com/antibesbeachhotel/',
    linkRestoPecheur: '/',
    linkRestoBaba: 'https://www.google.com/'
  },
  [Socials.INSTAGRAM]: {
    label: 'Instagram',
    link: 'https://www.instagram.com/capdantibesbeachhotel/',
    linkRestoPecheur: '/',
    linkRestoBaba: 'https://www.google.com/'
  },
  [Socials.LINKEDIN]: {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/company/35678536/admin/',
    linkRestoPecheur: '/',
    linkRestoBaba: 'https://www.google.com/'
  }
}
