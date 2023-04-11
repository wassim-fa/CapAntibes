import Formats from '@/enums/formats'
import Languages from '@/enums/languages'

export type FormatContextType = {
  format: Formats
  setFormat: React.Dispatch<React.SetStateAction<Formats>>
}
export type TMenuType =
  | 'none'
  | 'menu'
  | 'menu-close'
  | 'lang-dropdown'
  | 'lang-dropdown-close'
  | 'tobook'
  | 'tobook-close'
  | 'tobook-dropdown'
  | 'tobook-dropdown-close'
export type MenuContextType = {
  menuOpen: TMenuType
  setMenuOpen: React.Dispatch<React.SetStateAction<TMenuType>>
}
export type LangContextType = {
  lang: Languages
  setLang: React.Dispatch<React.SetStateAction<Languages>>
}
