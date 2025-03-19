import {
  Button,
  ButtonProps,
  ElementProps,
  Modal,
  ModalProps
} from "@mantine/core";
import { withModalManager } from "src/hocs/withModalManager";

export interface ModalConfirmProps extends ModalProps {
  message: string;
  confirmProps?: ButtonProps & ElementProps<"button", keyof ButtonProps>;
  cancelProps?: ButtonProps & ElementProps<"button", keyof ButtonProps>;
  cancelText?: string;
  confirmText?: string;
}

const ModalConfirm = withModalManager<ModalConfirmProps>(
  ({
    message,
    confirmProps,
    cancelProps,
    cancelText = "Cancelar",
    confirmText = "Confirmar",
    ...props
  }) => {
    return (
      <Modal {...props} returnFocus={false}>
        <p className="text-sm">{message}</p>
        <div className="flex w-full justify-end gap-2 pt-2">
          <Button
            variant="subtle"
            color="gray"
            {...cancelProps}
            onClick={(e) => {
              props.onClose();
              cancelProps?.onClick?.(e);
            }}
          >
            {cancelText}
          </Button>
          <Button variant="subtle" {...confirmProps}>
            {confirmText}
          </Button>
        </div>
      </Modal>
    );
  }
);

export default ModalConfirm;
