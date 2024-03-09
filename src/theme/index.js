import { themeMixin } from "./mixin";
import { themeComponents } from "./components";
import { themeDarkPalette, themeLightPalette } from "./palette";
import { themeTransitions } from "./transitions";
import { themeTypography } from "./typography";
import { themeZIndex } from "./zindex";
import { themeShadows } from "./shadows";
import { themeBreakpoints } from "./breakpoints";
import { themeSpacing } from "./spacing";

export const themes = {
  light: {
    breakpoints: themeBreakpoints,
    mixins: themeMixin,
    components: themeComponents,
    palette: themeLightPalette,
    shadows: themeShadows,
    spacing: themeSpacing,
    transitions: themeTransitions,
    typography: themeTypography,
    zIndex: themeZIndex,
  },
  dark: {
    breakpoints: themeBreakpoints,
    mixins: themeMixin,
    components: themeComponents,
    palette: themeDarkPalette,
    shadows: themeShadows,
    spacing: themeSpacing,
    transitions: themeTransitions,
    typography: themeTypography,
    zIndex: themeZIndex,
  },
};
