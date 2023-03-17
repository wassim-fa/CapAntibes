import { TMargin } from '@/interfaces'
import { defaultTheme } from '@/styles'

export const getMargin = (multipledBy = 1): string =>
  `${multipledBy * defaultTheme.margin.value}${defaultTheme.margin.unit}`

export const getMargins = (list: TMargin): string =>
  `${list.map((item) => getMargin(item)).join(' ')}`
