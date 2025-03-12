import { ModalRootProps } from "@mantine/core";
import { ComponentType } from "react";
import { dynamicModals } from "src/components/modals";

export type ModalKeys = keyof typeof dynamicModals;

export interface ModalManagerValues {
  showModal: ShowModalFn;
  closeModal: CloseModalFn;
}

export type ShowModalFn = (
  key: ModalKeys,
  props?: any,
  options?: { multiple: boolean }
) => void;

export type CloseModalFn = (key?: ModalKeys) => void;

type ExtractProps<Type> = Type extends ComponentType<infer X> ? X : never;

type Diff<T, U> = T extends U ? never : T;

type Minus<T, U> = Pick<T, Diff<keyof T, keyof U>>;

export type StatusModal = {
  modalKey: ModalKeys;
  props: any;
  opened?: boolean;
};

export type UseModalManagerFn = () => {
  showModal: <T extends ModalKeys, M extends (typeof dynamicModals)[T]>(
    key: T,
    props?: Minus<ExtractProps<M>, Omit<ModalRootProps, "title">>,
    options?: { multiple: boolean }
  ) => void;
  closeModal: (key?: ModalKeys) => void;
};
