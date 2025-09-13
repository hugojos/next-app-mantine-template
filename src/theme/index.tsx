import {
  createTheme,
  DEFAULT_THEME,
  Group,
  Modal,
  NumberFormatter,
  Stack,
} from "@mantine/core";
import { myDefaultTheme, toTailwindColors } from "lkd-web-kit";

export const twColors = toTailwindColors(DEFAULT_THEME.colors);

const theme = createTheme({
  ...myDefaultTheme,
  components: {
    ...myDefaultTheme.components,
    Modal: Modal.extend({
      defaultProps: {
        xOffset: "2vw",
        yOffset: "4dvh",
      },
    }),

    NumberFormatter: NumberFormatter.extend({
      defaultProps: {
        decimalSeparator: ",",
        thousandSeparator: ".",
      },
    }),
    Group: Group.extend({
      defaultProps: { gap: 4 },
    }),
    Stack: Stack.extend({
      defaultProps: { gap: 4 },
    }),
  },
  fontFamily: "Raleway, Raleway Fallback",
  defaultRadius: "sm",
  primaryShade: 7,
});

export default theme;
