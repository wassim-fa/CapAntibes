import {
  BookMenuContextProvider,
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
          <BookMenuContextProvider>
            <MenuContextProvider>{children}</MenuContextProvider>
          </BookMenuContextProvider>
        </LangContextProvider>
      </FormatContextProvider>
    </>
  )
}
