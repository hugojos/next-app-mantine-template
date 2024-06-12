import { ModalProps } from "@mantine/core";
import { ComponentType } from "react";
import { dynamicModals } from "src/components/modals";

export type ModalNS = keyof typeof dynamicModals;

export type KeyOfObject = string | number | symbol;

export interface ModalManagerValues {
  showModal: ShowModalFn;
  closeModal: CloseModalFn;
  isOpen: IsOpenFn;
}

export type ShowModalFn = <NS extends ModalNS>(
  ns: NS,
  key: KeyOfObject,
  props?: any,
  options?: { multiple: boolean }
) => void;

export type CloseModalFn = <NS extends ModalNS>(
  ns?: NS,
  key?: KeyOfObject
) => void;

export type IsOpenFn = <NS extends ModalNS>(
  ns: NS,
  key?: KeyOfObject
) => boolean;

type ExtractProps<Type> = Type extends ComponentType<infer X> ? X : never;

type Diff<T, U> = T extends U ? never : T;

type Minus<T, U> = Pick<T, Diff<keyof T, keyof U>>;

export type StatusModal = {
  ns: ModalNS;
  key: KeyOfObject;
  props: any;
};

export type useModalManagerFn = <
  NS extends ModalNS,
  O extends (typeof dynamicModals)[NS]
>(
  namespace: NS
) => {
  showModal: <K extends keyof O>(
    key: K,
    props?: Minus<ExtractProps<O[K]>, ModalProps>,
    options?: { multiple: boolean }
  ) => void;
  closeModal: <K extends keyof O>(key?: K) => void;
  isOpen: <K extends keyof O>(key?: K) => boolean;
};
