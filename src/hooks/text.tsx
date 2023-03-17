import { IContentByLang } from '@/interfaces'
import { LangContext } from '@/stores'
import { useContext } from 'react'

export const useText = (text: IContentByLang) => {
  const { lang } = useContext(LangContext)
  return text[lang]
}
