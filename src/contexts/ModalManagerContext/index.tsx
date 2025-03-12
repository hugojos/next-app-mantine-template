"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { dynamicModals } from "src/components/modals";
import {
  CloseModalFn,
  ModalKeys,
  ModalManagerValues,
  ShowModalFn,
  StatusModal,
  UseModalManagerFn
} from "./types";

const ModalManagerContext = createContext<ModalManagerValues | undefined>(
  undefined
);

export const ModalManagerProvider = ({
  children,
  loadModals = []
}: {
  children: React.ReactNode;
  loadModals?: (ModalKeys | (string & {}))[];
}) => {
  const [statusModal, setStatusModal] = useState<StatusModal[]>([]);

  useEffect(() => {
    loadModals.forEach(async (modalKey) => {
      const dynamicModal =
        dynamicModals[modalKey as keyof typeof dynamicModals];

      const modal = await import(`src/components/modals/${dynamicModal.path}`);

      dynamicModals[modalKey as keyof typeof dynamicModals].component =
        modal.default;
    });
  }, [loadModals]);

  const showModal: ShowModalFn = (key, props, options) => {
    setStatusModal((prev) =>
      options?.multiple
        ? [...prev, { modalKey: key, props, opened: true }]
        : [{ modalKey: key, props, opened: true }]
    );
  };

  const closeModal: CloseModalFn = (key) => {
    if (key === undefined) {
      setStatusModal((prev) =>
        prev.map((modal) => ({ ...modal, opened: false }))
      );
      return;
    }

    setStatusModal((prev) =>
      prev.map((modal) =>
        modal.modalKey === key ? { ...modal, opened: false } : modal
      )
    );
  };

  const renderModals = useMemo(
    () =>
      statusModal.map(({ modalKey, props, opened }, i) => {
        const Component = dynamicModals[modalKey]?.component;
        if (!Component) return null;
        return (
          <Component
            {...props}
            key={modalKey}
            opened={opened}
            removeModal={() => {
              setStatusModal((prev) => prev.filter((_, index) => index !== i));
            }}
            zIndex={200 + i}
          />
        );
      }),
    [statusModal]
  );

  return (
    <ModalManagerContext.Provider
      value={{
        showModal,
        closeModal
      }}
    >
      {renderModals}
      {children}
    </ModalManagerContext.Provider>
  );
};

export const useModalManager: UseModalManagerFn = () => {
  const context = useContext(ModalManagerContext);

  if (context === undefined) throw Error("Out of context: useModalManager");

  return context;
};
