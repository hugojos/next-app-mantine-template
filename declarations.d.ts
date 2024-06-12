declare module "*.svg" {
  import React, { ComponentPropsWithRef } from "react";
  const SVG: React.FC<
    ComponentPropsWithRef<"svg"> & {
      idprefix?: string;
      idSuffix?: string;
    }
  >;
  export default SVG;
}
