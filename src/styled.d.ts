import 'styled-components'
import { Colors, Fonts } from './enums'
import { ICssSizeAbsolute } from './interfaces'

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColors: Record<Colors, string>
    fontColors: Record<Colors, string>
    fontStyles: Record<Fonts, string>
    margin: ICssSizeAbsolute
    bottomBar: number
    navBar: {
      laptop: number
      mobile: number
    }
  }
}
