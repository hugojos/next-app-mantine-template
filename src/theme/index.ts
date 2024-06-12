"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    xs: "36em", //576px
    sm: "48em", //768px
    md: "62em", //992px
    lg: "75em", //1200px
    xl: "88em" //1408px
  },
  radius: {
    xs: "0.125rem", //2px
    sm: "0.25rem", //4px
    md: "0.5rem", //8px
    lg: "1rem", //16px
    xl: "2rem" //32px
  }
});
