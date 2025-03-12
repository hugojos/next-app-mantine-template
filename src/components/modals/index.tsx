import { ModalProps } from "@mantine/core";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const dynamicModal = <T extends ModalProps>(
  path: string
): { component: ComponentType<T>; path: string } => ({
  component: dynamic(() => import(`src/components/modals/${path}`), {
    ssr: false
    // loading(loadingProps) {
    //   return (
    //     <Overlay zIndex={1000} className="grid place-items-center">
    //       <Loader />
    //     </Overlay>
    //   );
    // },
  }),
  path
});

export const dynamicModals = {
  example: dynamicModal("module/example")
} as const;
