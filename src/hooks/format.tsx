import Formats from '@/enums/formats'
import { FormatContext } from '@/stores'
import { useContext } from 'react'

export const useIsMobile = () => {
  const { format } = useContext(FormatContext)
  return format === Formats.MOBILE
}

export const useIsLaptop = () => {
  const { format } = useContext(FormatContext)
  return format === Formats.LAPTOP
}
