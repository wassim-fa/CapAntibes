import { TCssSize } from '@/interfaces'
import { getCssSize, isCssSizeAbsolute } from './css-size'

export const getWidthForChildren = (nbOfChildren: number, margin: TCssSize) => {
  const width = 100 / nbOfChildren
  if (isCssSizeAbsolute(margin)) {
    return `calc(${width}% - ${getCssSize(margin)})`
  }
  return `${width}%`
}
