import { useContext } from "react";
import ModalContext from "../context/ModalContext";

function useModal() {
  const modalContext = useContext(ModalContext);
  return modalContext;
}

export default useModal;
