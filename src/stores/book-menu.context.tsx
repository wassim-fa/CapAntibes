import { BookMenuContextType } from '@/interfaces'
import React from 'react'

export const BookMenuContext = React.createContext<BookMenuContextType>({
  isBookMenuOpen: undefined,
  setIsBookMenuOpen: () => {}
})

export const BookMenuContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isBookMenuOpen, setIsBookMenuOpen] = React.useState<
    boolean | undefined
  >(undefined)
  return (
    <BookMenuContext.Provider
      value={{
        isBookMenuOpen,
        setIsBookMenuOpen
      }}
    >
      {children}
    </BookMenuContext.Provider>
  )
}
