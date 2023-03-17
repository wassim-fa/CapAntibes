import Formats from '@/enums/formats'

export const getFormat = (width: number): Formats => {
  let format = Formats.LAPTOP
  if (width <= 900 && width > 600) {
    format = Formats.TABLET
  } else if (width <= 600) {
    format = Formats.MOBILE
  }
  return format
}
