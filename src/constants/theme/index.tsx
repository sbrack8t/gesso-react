// Font Sizes
const fontsz12 = '12px';
const fontsz16 = '16px';
const fontsz20 = '20px';
const fontsz24 = '24px';
const fontsz32 = '32px';
const fontsz40 = '40px';
const fontsz48 = '48px';
const fontsz56 = '56px';
const fontsz64 = '64px';
const fontsz80 = '80px';

// Line Height
const lineHeightTight = 1.1;
const lineHeightBase = 1.1;
const lineHeightLoose = 1.1;

const baseSpacing = 8;

// Const createSpacing = (factor: number) => baseSpacing * baseSpacing;

// function createSpacing(spacingInput = 8) {
//   // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
//   // https://material.io/design/layout/understanding-layout.html#pixel-density
//   let transform: ;

//   if (typeof spacingInput === "function") {
//     transform = spacingInput;
//   } else {
//     if (process.env.NODE_ENV !== "production") {
//       if (typeof spacingInput !== "number") {
//         console.error(
//           [
//             `Material-UI: the \`theme.spacing\` value (${spacingInput}) is invalid.`,
//             "It should be a number or a function."
//           ].join("\n")
//         );
//       }
//     }
//     transform = factor => {
//       if (process.env.NODE_ENV !== "production") {
//         if (typeof factor !== "number") {
//           console.error(
//             `Expected spacing argument to be a number, got ${factor}`
//           );
//         }
//       }
//       return spacingInput * factor;
//     };
//   }

//   const spacing = (...args) => {
//     if (process.env.NODE_ENV !== "production") {
//       if (!(args.length <= 4)) {
//         console.error(
//           `Material-UI: Too many arguments provided, expected between 0 and 4, got ${args.length}`
//         );
//       }
//     }

//     if (args.length === 0) {
//       return transform(1);
//     }

//     if (args.length === 1) {
//       return transform(args[0]);
//     }

//     return args
//       .map(factor => {
//         const output = transform(factor);
//         return typeof output === "number" ? `${output}px` : output;
//       })
//       .join(" ");
//   };

//   // Backward compatibility, to remove in v5.
//   Object.defineProperty(spacing, "unit", {
//     get: () => {
//       if (process.env.NODE_ENV !== "production") {
//         if (!warnOnce || process.env.NODE_ENV === "test") {
//           console.error(
//             [
//               "Material-UI: theme.spacing.unit usage has been deprecated.",
//               "It will be removed in v5.",
//               "You can replace `theme.spacing.unit * y` with `theme.spacing(y)`.",
//               "",
//               "You can use the `https://github.com/mui-org/material-ui/tree/master/packages/material-ui-codemod/README.md#theme-spacing-api` migration helper to make the process smoother."
//             ].join("\n")
//           );
//         }

//         warnOnce = true;
//       }
//       return spacingInput;
//     }
//   });
//   spacing.mui = true;

//   return spacing;
// }

const theme = {
  palette: {
    brand: {},
    grayscale: {},
    uigeneric: {},
  },
  boxShadow: {
    0: 'none',
    1: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
    2: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
    3: '0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)',
    4: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
    5: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)',
  },
  constrains: {
    sm: 800,
    md: 1440,
    lg: 2200,
  },
  breakpoints: {
    desktop: 1024,
    desktopLg: 1200,
    mobile: 320,
    mobileLg: 480,
    tablet: 640,
    tabletLg: 880,
    widescreen: 1400,
  },
  typography: {
    fontWeight: {
      bold: 700,
      light: 300,
      regular: 400,
      semibold: 600,
    },
    lineHeight: {
      tight: lineHeightTight,
      base: lineHeightBase,
      loose: lineHeightLoose,
    },
    fontSize: {
      0: fontsz12,
      1: fontsz16,
      2: fontsz20,
      3: fontsz24,
      5: fontsz32,
      6: fontsz40,
      7: fontsz48,
      8: fontsz56,
      9: fontsz64,
      10: fontsz80,
    },
  },
  spacing: {
    0: '8px',
    1: '16px',
    2: '20px',
    3: '24px',
    4: '32px',
  },
  zIndex: {
    nav: 1000,
    drawer: 1200,
    modal: 1300,
  },
} as const;

export type Theme = typeof theme;

export default theme;
