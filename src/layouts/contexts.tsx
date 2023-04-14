import Languages from '@/enums/languages'
import {
  FormatContextProvider,
  LangContextProvider,
  MenuContextProvider
} from '@/stores'
import React from 'react'

export function ContextsLayout({
  defaultLang,
  children
}: {
  defaultLang: Languages
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <FormatContextProvider>
        <LangContextProvider defaultLang={defaultLang}>
          <MenuContextProvider>{children}</MenuContextProvider>
        </LangContextProvider>
      </FormatContextProvider>
    </>
  )
}
