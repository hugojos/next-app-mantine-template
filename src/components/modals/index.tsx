import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { ModalManagerWrapperProps } from "lkd-web-kit";
import { ConfirmActionModalProps } from "./ConfirmAction";

const dynamicModal = <T extends object>(
  path: string,
): {
  component: ComponentType<ModalManagerWrapperProps<T>>;
  path: string;
} => ({
  component: dynamic(() => import(`src/components/modals/${path}`), {
    ssr: false,
  }),
  path,
});

export const dynamicModals = {
  confirmAction: dynamicModal<ConfirmActionModalProps>("ConfirmAction"),
} as const;