import { useContext } from "react";
import { ThemeContext } from 'styled-components';
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";

const TaskModal= ({ isOpen }) => {
  const theme = useContext(ThemeContext); 
  const { toggleModalVisibility, selectedCard } = useModal();

  const handleCloseModal = () => {
    toggleModalVisibility(undefined);
  }

  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="modal-modal-overlay"
      className="react-modal-content"
      >

    </Modal>
  )
};

export default TaskModal;

