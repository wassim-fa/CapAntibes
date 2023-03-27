import {
  FormatContextProvider,
  LangContextProvider,
  MenuContextProvider
} from '@/stores'
import React from 'react'

export function ContextsLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <>
      <FormatContextProvider>
        <LangContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </LangContextProvider>
      </FormatContextProvider>
    </>
  )
}
