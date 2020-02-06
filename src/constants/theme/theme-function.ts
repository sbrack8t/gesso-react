import {
  Breakpoint,
  Breakpoints,
  FontSizes,
  FontSize,
  FontWeight,
  FontWeights,
  Zindexes,
  Zindex,
  // Spacing,
} from './theme-types';

import { Theme } from '.';

export type ThemeFunction<T> = (props: { theme: Theme }) => T;

// Get Breakpoint from theme object
export function getBreakpoint<BP extends Breakpoint>(
  breakpoint: BP,
): ThemeFunction<Breakpoints[BP]> {
  return props => props.theme.breakpoints[breakpoint];
}

// Get Font Size from theme object
export function getFontSize<Size extends FontSize>(
  size: Size,
): ThemeFunction<FontSizes[Size]> {
  return props => props.theme.typography.fontSize[size];
}

// Get Font Weight from theme object
export function getFontWeight<Weight extends FontWeight>(
  weight: Weight,
): ThemeFunction<FontWeights[Weight]> {
  return props => props.theme.typography.fontWeight[weight];
}

// Get Z-index level from theme object
export function getZindex<Level extends Zindex>(
  level: Level,
): ThemeFunction<Zindexes[Level]> {
  return props => props.theme.zIndex[level];
}
