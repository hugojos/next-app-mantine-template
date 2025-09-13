declare module "*.svg" {
  import type { IconProps } from "lkd-web-kit";
  import type React from "react";

  const SVG: React.FC<Omit<IconProps, "i">>;
  export default SVG;
}

// interface MyMeta extends Record<string, unknown> {
//   invalidates?: (string | string[])[];
// }

// declare module "@tanstack/react-query" {
//   interface Register {
//     queryMeta: MyMeta;
//     mutationMeta: MyMeta;
//   }
// }
