import { FaTrashCan } from "react-icons/fa6";
import Button from "./Button";
import Modal from "./Modal";

function ModalDelete({ disabled, removeFunc }) {
  return (
    <Modal>
      <Modal.Open opens="delete">
        <Button variation="round" disabled={disabled}>
          <FaTrashCan />
        </Button>
      </Modal.Open>
      <Modal.Window name="delete">
        <div className="px-3 py-2 ml-auto">
          <p className="px-3 py-2 font-mono text-gray-800 text-md dark:text-gray-50 ">
            Are you sure you want to delete this customer?
          </p>
          <p className="px-3 py-4 font-mono text-red-800 text-md dark:text-red-300">
            This is permanent
          </p>
          <Button variation="primary" disabled={disabled} onClick={removeFunc}>
            yes
          </Button>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default ModalDelete;
