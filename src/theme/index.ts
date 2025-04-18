import {
  AppShell,
  createTheme,
  DEFAULT_THEME,
  DefaultMantineColor,
  MantineColorShade,
  Notification
} from "@mantine/core";

export const breakpointsWithPx = {
  xs: "576px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  ["2xl"]: "1536px"
};

// transforma la estructura de colores de Mantine a la de Tailwind
export const twColors = Object.entries(DEFAULT_THEME.colors).reduce(
  (acc, [key, value]) => {
    acc[key] = value.reduce(
      (acc, color, index) => {
        acc[index as MantineColorShade] = color;
        return acc;
      },
      {} as Record<MantineColorShade, string>
    );

    return acc;
  },
  {} as Record<DefaultMantineColor, Record<MantineColorShade, string>>
);

const theme = createTheme({
  fontFamily: "Raleway, Raleway Fallback",
  breakpoints: breakpointsWithPx,
  components: {
    Notification: Notification.extend({
      defaultProps: {
        withBorder: true
      }
    }),
    AppShell: AppShell.extend({
      defaultProps: {
        padding: 0
      }
    })
  },
  cursorType: "pointer",
  defaultRadius: "md"
});

export default theme;
