import Languages from '@/enums/languages'
import { LangContextType } from '@/interfaces'
import React from 'react'

export const LangContext = React.createContext<LangContextType>({
  lang: Languages.FR,
  setLang: () => {}
})

export const LangContextProvider = ({
  defaultLang,
  children
}: {
  defaultLang: Languages
  children: React.ReactNode
}) => {
  const [lang, setLang] = React.useState<Languages>(defaultLang || Languages.FR)

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
