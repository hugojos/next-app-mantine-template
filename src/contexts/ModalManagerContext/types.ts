import type { ModalProps } from "@mantine/core";
import type { ComponentType } from "react";
import type { dynamicModals } from "src/components/modals";

export type ModalKeys = keyof typeof dynamicModals;

export interface ModalManagerValues {
  showModal: ShowModalFn;
  closeModal: CloseModalFn;
}

export type ShowModalFn = (
  key: ModalKeys,
  props?: any,
  options?: { multiple: boolean } & Partial<ModalProps>,
) => void;

export type CloseModalFn = (key?: ModalKeys) => void;

type ExtractProps<Type> = Type extends ComponentType<infer X> ? X : never;

type Diff<T, U> = T extends U ? never : T;

type Minus<T, U> = Pick<T, Diff<keyof T, keyof U>>;

export type StatusModal = {
  modalKey: ModalKeys;
  props: any;
  modalProps?: Partial<ModalProps>;
  opened?: boolean;
};

export type UseModalManagerFn = () => {
  showModal: <
    T extends ModalKeys,
    M extends (typeof dynamicModals)[T]["component"],
  >(
    key: T,
    props?: Omit<ExtractProps<M>, "removeModal" | "modalProps">,
    options?: { multiple: boolean } & Partial<ModalProps>,
  ) => void;
  closeModal: (key?: ModalKeys) => void;
};
