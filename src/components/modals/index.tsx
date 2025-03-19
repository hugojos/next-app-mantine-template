import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { ModalConfirmProps } from "./common/Confirm";

const dynamicModal = <T,>(
  path: string
): { component: ComponentType<T>; path: string } => ({
  component: dynamic(() => import(`src/components/modals/${path}`), {
    ssr: false
  }) as ComponentType<T>,
  path
});

export const dynamicModals = {
  "common.confirm": dynamicModal<ModalConfirmProps>("common/Confirm")
} as const;
