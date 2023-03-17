export type TCssUnitAbsolute = 'px' | '%' | 'vw' | 'vh'

export interface ICssSizeAbsolute {
  value: number
  unit: TCssUnitAbsolute
}
export type TCssSizeRelative =
  | 'auto'
  | 'initial'
  | 'inherit'
  | 'fit-content'
  | 'max-content'
  | 'min-content'

export type TCssSize = TCssSizeRelative | ICssSizeAbsolute
