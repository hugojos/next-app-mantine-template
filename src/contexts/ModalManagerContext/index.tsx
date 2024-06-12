"use client";
import { ModalProps } from "@mantine/core";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dynamicModals } from "src/components/modals";
import {
  CloseModalFn,
  IsOpenFn,
  ModalManagerValues,
  ShowModalFn,
  StatusModal,
  useModalManagerFn
} from "./types";

const ModalManagerContext = createContext<ModalManagerValues | undefined>(
  undefined
);

export const ModalManagerProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [statusModal, setStatusModal] = useState<StatusModal[]>([]);
  const pathname = usePathname();

  const showModal: ShowModalFn = (ns, key, props, options) => {
    setStatusModal((prev) =>
      options?.multiple ? [...prev, { ns, props, key }] : [{ key, props, ns }]
    );
  };

  const closeModal: CloseModalFn = (ns, key) => {
    if (ns === undefined) {
      setStatusModal([]);
      return;
    }
    setStatusModal((prev) =>
      prev.filter(
        (statusModal) => !(statusModal.ns === ns && statusModal.key === key)
      )
    );
  };

  const isOpen: IsOpenFn = (ns, key) =>
    key
      ? statusModal.findIndex(
          (modal) => modal.key !== key && modal.ns === ns
        ) !== -1
      : statusModal.length > 0;

  const renderModals = useMemo(
    () =>
      statusModal.map((modal, i) => {
        const Modal = dynamicModals[modal.ns][
          modal.key as keyof (typeof dynamicModals)[typeof modal.ns]
        ] as React.FC<ModalProps>;

        return (
          <Modal
            key={modal.key}
            {...modal.props}
            onClose={() => {
              closeModal(modal.ns, modal.key);
              modal.props?.onClose?.();
            }}
            opened
          />
        );
      }),
    [statusModal]
  );

  useEffect(() => {
    closeModal();
  }, [pathname]);

  return (
    <ModalManagerContext.Provider
      value={{
        showModal,
        closeModal,
        isOpen
      }}
    >
      {renderModals}
      {children}
    </ModalManagerContext.Provider>
  );
};

export const useModalManager: useModalManagerFn = (namespace) => {
  const context = useContext(ModalManagerContext);

  if (context === undefined) throw Error("Out of context: useModalManager");

  return {
    showModal: (key, props, options) =>
      context.showModal(namespace, key, props, options),
    closeModal: (key) => context.closeModal(namespace, key),
    isOpen: (key) => context.isOpen(namespace, key)
  };
};
