import { useContext, useState } from "react";
import { ThemeContext } from 'styled-components';
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { Container, Input, ValidationMessage } from "./styles";
import closeImg from "../../assets/close.svg";
import {IoWarningOutline} from 'react-icons/io5';

const TaskModal= ({ isOpen, toggleModalVisibility }) => {
  const theme = useContext(ThemeContext); 
  const { selectedCard } = useModal();

  const [title, setTitle] = useState(selectedCard?.title ? selectedCard.title : "");
  const [description, setDescription] = useState(selectedCard?.description ? selectedCard.description : "");
  const [cardCategory, setCardCategory] = useState(selectedCard?.category || "feature");
  const [validationMessage, setValidationMessage] = useState("This is not a valid title");
  
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
      <button 
        className='react-modal-close'
        type='button' 
        onClick={handleCloseModal}
      >
        <img src={closeImg} alt="Botão X para Fechar modal" />
      </button>

      <Container>
        <h2> Nova tarefa</h2>
        <Input 
          type="text" 
          placeholder="Título"
          value={title}
          maxLength={50}
          onChange={(event) => setTitle(event.target.value)}
          showValidationMessage={!!validationMessage}
        />
        {validationMessage && (
          <ValidationMessage><IoWarningOutline size={21}/> {validationMessage}</ValidationMessage>
        )}

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Container>  

    </Modal>
  )
};

export default TaskModal;

