import Socials from '@/enums/socials'
import { ILinkContent } from '@/interfaces'

export const contentsSocialLinks: Record<Socials, ILinkContent> = {
  [Socials.WHATSAPP]: {
    label: 'WhatsApp',
    link: '/',
    linkRestoPecheur: '/',
    linkRestoBaba: '/'
  },
  [Socials.FACEBOOK]: {
    label: 'Facebook',
    link: 'https://www.facebook.com/antibesbeachhotel/',
    linkRestoPecheur: 'https://www.facebook.com/antibesbeachhotel/',
    linkRestoBaba: 'https://www.facebook.com/antibesbeachhotel/'
  },
  [Socials.INSTAGRAM]: {
    label: 'Instagram',
    link: 'https://www.instagram.com/capdantibesbeachhotel/',
    linkRestoPecheur: 'https://www.instagram.com/capdantibesbeachhotel/',
    linkRestoBaba: 'https://www.instagram.com/capdantibesbeachhotel/'
  },
  [Socials.LINKEDIN]: {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/company/35678536/admin/',
    linkRestoPecheur: 'https://www.linkedin.com/company/35678536/admin/',
    linkRestoBaba: 'https://www.linkedin.com/company/35678536/admin/'
  }
}
