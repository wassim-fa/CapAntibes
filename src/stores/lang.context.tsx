import Languages from '@/enums/languages'
import { LangContextType } from '@/interfaces'
import React from 'react'

export const LangContext = React.createContext<LangContextType>({
  lang: Languages.FR,
  setLang: () => {}
})

export const LangContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [lang, setLang] = React.useState<Languages>(Languages.FR)
  return (
    <LangContext.Provider
      value={{
        lang,
        setLang
      }}
    >
      {children}
    </LangContext.Provider>
  )
}
