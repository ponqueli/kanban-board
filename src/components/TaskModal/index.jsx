import { 
  useContext, 
  useState 
} from "react";
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from 'styled-components';
import Modal from "react-modal";
import { useModal } from "../../hooks/useModal";
import { CATEGORIES_ENUM, STATUS_ENUM } from "../../constants/enums";
import { 
  Container, 
  Input, 
  TextArea, 
  CategoryContainer, 
  RadioAndLabelContainer, 
  ValidationMessage 
} from "./styles";
import closeImg from "../../assets/close.svg";
import { IoWarningOutline } from 'react-icons/io5';

const TaskModal= ({ isOpen, toggleModalVisibility }) => {
  const theme = useContext(ThemeContext); 
  const { selectedCard } = useModal();

  const [title, setTitle] = useState(selectedCard?.title ? selectedCard?.title : "");
  const [description, setDescription] = useState(selectedCard?.description ? selectedCard.description : "");
  const [cardCategory, setCardCategory] = useState(selectedCard?.category || "feature");
  const [validationMessage, setValidationMessage] = useState("");
  
  const handleCloseModal = () => {
    toggleModalVisibility(undefined);
  }

  const getCategoryBackgroundColor = (theme, category) =>{
    switch(category){
      case CATEGORIES_ENUM.FEATURE:
        return theme.colors.feature;
      case CATEGORIES_ENUM.BUG:
        return theme.colors.bug;
      case CATEGORIES_ENUM.IMPROVEMENT:
        return theme.colors.improvement;
      case CATEGORIES_ENUM.REFACTOR:
        return theme.colors.refactor;
      case CATEGORIES_ENUM.INFRA:
        return theme.colors.infra;
      default:
        return theme.colors.primary;
    }
  }

  const handleCreateNewTask = (event) =>{
    event.preventDefault();
    if(title.trim().length === 0){
      setValidationMessage("Title is required");
      return;
    }

    setValidationMessage(undefined);

    if(!selectedCard?.id){
      const newCard = {
        id: uuidv4(),
        title,
        description,
        category: cardCategory,
        status: STATUS_ENUM.BACKLOG,
        hidden: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };



    }

  }  

  const validateInputAndSet = (value)=>{
    setTitle(value);
    value.trim().length!== 0 ? setValidationMessage(""): setValidationMessage("Title is required");
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

      <Container onSubmit={handleCreateNewTask}>
        <h2> Nova tarefa</h2>
        <Input 
          type="text" 
          placeholder="Título"
          value={title}
          maxLength={50}
          onChange={(event) => validateInputAndSet(event.target.value)}
          showValidationMessage={!!validationMessage}
        />
        {validationMessage && (
          <ValidationMessage>
            <IoWarningOutline size={21}/> {validationMessage}
          </ValidationMessage>
        )}

        <TextArea
          placeholder="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <CategoryContainer>
          {Object.values(CATEGORIES_ENUM).map((category) => (
            <RadioAndLabelContainer 
              key={category}
              className="radio-and-label-container"
              backgroundColor={()=>getCategoryBackgroundColor(theme, category)}
            >
              <label>
                <input
                  type="radio"
                  name={category}
                  value={category}
                  checked={cardCategory === category}
                  onChange={(e) => setCardCategory(e.currentTarget.value)}
                />
                <span>{category}</span>
              </label>  
            </RadioAndLabelContainer>  
          ))}
        </CategoryContainer>
        
        <button type="submit"> Save to Backlog </button>
      </Container>  
    </Modal>
  )
};

export default TaskModal;