import Formats from '@/enums/formats'
import { FormatContextType } from '@/interfaces'
import { getFormat } from '@/utils'
import React, { useEffect } from 'react'

export const FormatContext = React.createContext<FormatContextType>({
  format: Formats.LAPTOP,
  setFormat: () => {}
})

export const FormatContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [format, setFormat] = React.useState<Formats>(Formats.LAPTOP)

  useEffect(() => {
    function handleResize() {
      const format = getFormat(window.innerWidth)

      setFormat(format)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <FormatContext.Provider
      value={{
        format,
        setFormat
      }}
    >
      {children}
    </FormatContext.Provider>
  )
}
