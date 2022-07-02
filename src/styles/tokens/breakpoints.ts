const sizes = {
  xl: 1400,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 560,
}

export type BreakpointSizeType = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

export const breakpoints = {
  sizes,
  minWidth: (size: BreakpointSizeType) => {
    return `@media (min-width: ${sizes[size]}px)`
  },
  maxWidth: (size: BreakpointSizeType) => {
    return `@media (max-width: ${sizes[size]}px)`
  },
} as const