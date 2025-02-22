import { Modal, ModalProps } from "@mantine/core";

interface ExampleProps extends ModalProps {}

const Example = (props: ExampleProps) => {
  return (
    <Modal {...props} returnFocus={false}>
      example
    </Modal>
  );
};

export default Example;
