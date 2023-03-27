import { MenuContextType, TMenuType } from '@/interfaces'
import React from 'react'

export const MenuContext = React.createContext<MenuContextType>({
  menuOpen: 'none',
  setMenuOpen: () => {}
})

export const MenuContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [menuOpen, setMenuOpen] = React.useState<TMenuType>('none')
  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
