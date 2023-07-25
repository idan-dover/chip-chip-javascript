import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { FaCircleXmark } from "react-icons/fa6";
import Button from "./Button";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ opens: openWindowName, children }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) {
    return null;
  }

  return createPortal(
    <div className="fixed top-0 left-0 z-10 w-full h-full transition-all duration-500 bg-gray-100 bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 backdrop-filter backdrop-blur">
      <div
        className="fixed max-h-[75vh] w-1/3 overflow-y-scroll px-3 py-4 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 border-2 shadow-md top-1/2 left-1/2 dark:bg-gray-800"
        ref={ref}
      >
        <Button variation="round" onClick={close}>
          <FaCircleXmark />
        </Button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
