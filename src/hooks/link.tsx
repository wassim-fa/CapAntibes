import { LangContext } from '@/stores'
import { urls } from '@/utils'
import { useContext } from 'react'

export const useLink = (frPath: string) => {
  const { lang } = useContext(LangContext)
  const path = urls.find((item) => item.fr === frPath)
  return path ? path[lang] : '/'
}
