import { ICssSizeAbsolute, TCssSize, TCssSizeRelative } from '@/interfaces'

export const getCssSize = (size: TCssSize): string => {
  if (isCssSizeAbsolute(size)) {
    return `${(size as ICssSizeAbsolute).value}${
      (size as ICssSizeAbsolute).unit
    }`
  }
  return size as TCssSizeRelative
}

export const isCssSizeAbsolute = (size: TCssSize): boolean =>
  typeof size === 'object'
