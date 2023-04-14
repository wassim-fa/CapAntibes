import Languages from '@/enums/languages'
import { LangContextType } from '@/interfaces'
import { urls } from '@/utils'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

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
  const router = useRouter()
  const [lang, setLang] = React.useState<Languages>(defaultLang || Languages.FR)

  useEffect(() => {
    const newPath = urls.find((item) =>
      [item[Languages.FR], item[Languages.EN], item[Languages.RU]].includes(
        router.route
      )
    )
    if (newPath) {
      router.push(newPath[lang], undefined, { shallow: true })
    }
  }, [lang])
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
