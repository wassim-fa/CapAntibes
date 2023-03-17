import { MenuContextType } from '@/interfaces'
import React from 'react'

export const MenuContext = React.createContext<MenuContextType>({
  isMenuOpen: undefined,
  setIsMenuOpen: () => {}
})

export const MenuContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean | undefined>(
    undefined
  )
  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
