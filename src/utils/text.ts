export const getFontSize = (current: string, middleSize: number): string =>
  `clamp(${middleSize - 5}px, ${current}, ${middleSize + 5}px)`
