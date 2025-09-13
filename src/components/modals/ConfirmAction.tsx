import { Button, Group, Modal, Stack, Text } from "@mantine/core";
import { withModalManager } from "lkd-web-kit";

export interface ConfirmActionModalProps {
  title: string;
  body?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void | Promise<void>;
}

const ConfirmAction = withModalManager<ConfirmActionModalProps>(
  ({
    title,
    body,
    confirmLabel = "Confirmar",
    cancelLabel = "Cancelar",
    onConfirm,
    modalProps,
  }) => {
    return (
      <Modal title={title} size={500} {...modalProps}>
        <Stack>
          {typeof body === "string" ? <Text>{body}</Text> : body}
          <Group justify="end" mt="sm" gap={12}>
            <Button variant="default" onClick={() => modalProps.onClose?.()}>
              {cancelLabel}
            </Button>
            <Button
              onClick={async () => {
                await onConfirm();
                modalProps.onClose?.();
              }}
            >
              {confirmLabel}
            </Button>
          </Group>
        </Stack>
      </Modal>
    );
  },
);

export default ConfirmAction;
