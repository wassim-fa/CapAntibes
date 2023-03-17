import Formats from '@/enums/formats'
import Languages from '@/enums/languages'

export type BookMenuContextType = {
  isBookMenuOpen: boolean | undefined
  setIsBookMenuOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
}
export type FormatContextType = {
  format: Formats
  setFormat: React.Dispatch<React.SetStateAction<Formats>>
}
export type MenuContextType = {
  isMenuOpen: boolean | undefined
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>
}
export type LangContextType = {
  lang: Languages
  setLang: React.Dispatch<React.SetStateAction<Languages>>
}
