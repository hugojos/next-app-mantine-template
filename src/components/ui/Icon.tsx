"use client";
import { Box, BoxProps, ElementProps } from "@mantine/core";
import { ComponentPropsWithRef, Ref, forwardRef, useId } from "react";

export interface IconProps
  extends ElementProps<"svg", "size" | "ref" | "display" | "opacity">,
    BoxProps {
  i: IconFC;
  /**
   * @property xs: 16px
   * @property sm: 20px
   * @property md: 24px
   * @property lg: 28px
   * @property xl: 32px
   * @property 2xl: 40px
   */
  c?: string;
  size?: keyof typeof styleBySize;
}

export type IconFC = React.FC<
  ComponentPropsWithRef<"svg"> & {
    idprefix?: string;
    idSuffix?: string;
  }
>;

const Icon = forwardRef(
  (
    {
      i: I,
      size = "md",
      direction = "left",
      style,
      rotate,
      ...rest
    }: IconProps,
    ref: Ref<any>
  ) => {
    /* 
      Para que no haya colisiones de ids al renderizar el icono en varios lados, le pasamos este id a la prop idprefix.
      Esta prop es agregada gracias al archivo svgr-dynamic-ids.js que se encuentra en la raíz del proyecto.
    */
    const id = useId();

    return (
      <Box
        component={I}
        {...styleBySize[size]}
        viewBox="0 0 24 24"
        ref={ref}
        idprefix={id}
        style={{
          ...style,
          transform: `rotate(${rotate}deg)`
        }}
        {...rest}
      />
    );
  }
);

Icon.displayName = "Icon";

const styleBySize = {
  xs: {
    height: 16,
    width: 16
  },
  sm: {
    height: 20,
    width: 20
  },
  md: {
    height: 24,
    width: 24
  },
  lg: {
    height: 28,
    width: 28
  },
  xl: {
    height: 32,
    width: 32
  },
  ["2xl"]: {
    height: 40,
    width: 40
  }
};

export default Icon;
