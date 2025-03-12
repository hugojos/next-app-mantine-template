import { Modal, ModalProps } from "@mantine/core";
import { withModalManager } from "src/hocs/withModalManager";

interface ExampleProps extends ModalProps {}

const Example = withModalManager((props: ExampleProps) => {
  return (
    <Modal {...props} returnFocus={false}>
      example
    </Modal>
  );
});

export default Example;
