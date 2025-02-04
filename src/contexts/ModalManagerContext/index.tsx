"use client";
import { ModalProps } from "@mantine/core";
import { createContext, useContext, useMemo, useState } from "react";
import { dynamicModals } from "src/components/modals";
import {
  CloseModalFn,
  ModalKeys,
  ModalManagerValues,
  ShowModalFn,
  StatusModal,
  useModalManagerFn
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
  const modalKeys = useMemo(
    () => Object.keys(dynamicModals) as ModalKeys[],
    [dynamicModals]
  );
  const [statusModal, setStatusModal] = useState<
    Record<ModalKeys, StatusModal>
  >(() => {
    const obj = {} as Record<ModalKeys, StatusModal>;

    modalKeys.forEach((modalKey) => {
      obj[modalKey] = {
        key: modalKey,
        opened: false,
        openedAt: 0,
        closedAt: 0,
        preload: loadModals.some((loadModalKey) =>
          modalKey.includes(loadModalKey)
        ),
        props: {}
      };
    });

    return obj;
  });

  const showModal: ShowModalFn = (key, props, options) => {
    setStatusModal((prevStatusModal) => {
      const nextStatusModal = { ...prevStatusModal };
      if (options?.multiple)
        nextStatusModal[key] = {
          ...nextStatusModal[key],
          opened: true,
          openedAt: Date.now(),
          props
        };
      else
        modalKeys.forEach((modalKey) => {
          nextStatusModal[modalKey] = {
            ...nextStatusModal[modalKey],
            opened: false
          };
        });

      nextStatusModal[key] = {
        ...nextStatusModal[key],
        opened: true,
        openedAt: Date.now(),
        props
      };

      return nextStatusModal;
    });
  };

  const closeModal: CloseModalFn = (key) => {
    setStatusModal((prevStatusModal) => {
      const nextStatusModal = { ...prevStatusModal };
      if (key)
        nextStatusModal[key] = {
          ...nextStatusModal[key],
          opened: false
        };
      else
        modalKeys.forEach((modalKey) => {
          nextStatusModal[modalKey] = {
            ...nextStatusModal[modalKey],
            opened: false
          };
        });

      return nextStatusModal;
    });
  };

  const renderModals = useMemo(
    () =>
      modalKeys
        .sort((a, b) => statusModal[a].openedAt - statusModal[b].openedAt)
        .map((modalKey, i) => {
          if (
            !statusModal[modalKey].preload &&
            statusModal[modalKey].openedAt === 0
          )
            return null;

          const Modal = dynamicModals[modalKey] as React.FC<ModalProps>;
          const props = statusModal[modalKey].props;
          return (
            <Modal
              {...props}
              key={`${modalKey}${statusModal[modalKey].closedAt}`}
              onExitTransitionEnd={() => {
                setStatusModal((prevStatusModal) => {
                  const nextStatusModal = { ...prevStatusModal };
                  nextStatusModal[modalKey] = {
                    ...nextStatusModal[modalKey],
                    closedAt: Date.now()
                  };
                  return nextStatusModal;
                });
              }}
              id={modalKey}
              // closeOnEscape={false}
              onClose={() => {
                closeModal(modalKey);
                props?.onClose?.();
              }}
              zIndex={200 + i}
              opened={statusModal[modalKey].opened}
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

export const useModalManager: useModalManagerFn = () => {
  const context = useContext(ModalManagerContext);

  if (context === undefined) throw Error("Out of context: useModalManager");

  return context;
};
