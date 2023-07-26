import { FaPen } from "react-icons/fa6";
import Button from "./Button";
import Modal from "./Modal";

function ModalUpdate({ disabled, render }) {
  return (
    <Modal>
      <Modal.Open opens="update">
        <Button variation="round" disabled={disabled}>
          <FaPen />
        </Button>
      </Modal.Open>

      <Modal.Window name="update">{render}</Modal.Window>
    </Modal>
  );
}

export default ModalUpdate;
