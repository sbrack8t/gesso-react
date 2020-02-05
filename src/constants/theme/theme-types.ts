import {Theme} from './index'

export type Breakpoints = Theme['breakpoints'];
export type Breakpoint = keyof Breakpoints;

export type Typography = Theme['typography']; 

export type FontSizes = Typography['fontSize'];
export type FontSize = keyof FontSizes;

export type FontWeights = Typography['fontWeight'];
export type FontWeight = keyof FontWeights;

export type Spacing = Theme['spacing'];
export type SpaceUnit = keyof Spacing;

export type Zindexes = Theme['zIndex'];
export type Zindex = keyof Zindexes;
