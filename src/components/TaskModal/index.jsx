import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ThemeContext } from 'styled-components';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../../store/tasks.slice';
import { updatedColumns } from '../../store/columns.slice';
import { useModal } from '../../hooks/useModal';
import { CATEGORIES_ENUM, STATUS_ENUM } from '../../constants/enums';
import { getCategoryBackgroundColor } from "../../helpers/helpers";
import {
  Container,
  Input,
  TextArea,
  CategoryContainer,
  RadioAndLabelContainer,
  ValidationMessage,
} from './styles';
import closeImg from '../../assets/close.svg';
import { IoWarningOutline } from 'react-icons/io5';

const TaskModal = ({ isOpen, toggleModalVisibility }) => {
  const dispatch = useDispatch();

  const theme = useContext(ThemeContext);
  const { selectedCard } = useModal();

  const [title, setTitle] = useState(
    selectedCard?.title ? selectedCard?.title : ''
  );
  const [description, setDescription] = useState(
    selectedCard?.description ? selectedCard.description : ''
  );
  const [cardCategory, setCardCategory] = useState(
    selectedCard?.category || CATEGORIES_ENUM.FEATURE
  );
  const [validationMessage, setValidationMessage] = useState('');

  const handleCloseModal = () => {
    toggleModalVisibility(undefined);
  };

  function resetForm() {
    setTitle('');
    setDescription('');
    setCardCategory(CATEGORIES_ENUM.FEATURE);
    setValidationMessage('');
  }

  const handleCreateNewTask = (event) => {
    event.preventDefault();
    if (title.trim().length === 0) {
      setValidationMessage('Title is required');
      return;
    }

    setValidationMessage(undefined);

    if (!selectedCard?.id) {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        category: cardCategory,
        status: STATUS_ENUM.BACKLOG,
        hidden: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      dispatch(addTask(newTask));
      dispatch(updatedColumns(newTask.id));
      toggleModalVisibility(undefined);
    }

    const updatedTask = {
      ...selectedCard,
      title,
      description,
      category: cardCategory,
      updatedAt: new Date(),
    };

    dispatch(updateTask(updatedTask));
    toggleModalVisibility(undefined);
    resetForm();
  };

  const validateInputAndSet = (value) => {
    setTitle(value);
    value.trim().length !== 0
      ? setValidationMessage('')
      : setValidationMessage('Title is required');
  };

  useEffect(() => {
    setTitle(selectedCard?.title ? selectedCard?.title : '');
    setDescription(selectedCard?.description ? selectedCard.description : '');
    setCardCategory(selectedCard?.category || CATEGORIES_ENUM.FEATURE);
  }, [selectedCard, isOpen]);

  if(!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="modal-modal-overlay"
      className="react-modal-content"
    >
      <button
        className="react-modal-close"
        type="button"
        onClick={handleCloseModal}
      >
        <img src={closeImg} alt="X Button to close modal" />
      </button>

      <Container onSubmit={handleCreateNewTask}>
        <h2>{selectedCard?.id?`You Are Editing 🐱`: "New Task"}</h2>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          maxLength={50}
          onChange={(event) => validateInputAndSet(event.target.value)}
          showValidationMessage={!!validationMessage}
        />
        {validationMessage && (
          <ValidationMessage>
            <IoWarningOutline size={21} /> {validationMessage}
          </ValidationMessage>
        )}

        <TextArea
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <CategoryContainer>
          {Object.values(CATEGORIES_ENUM).map((category) => (
            <RadioAndLabelContainer
              key={category}
              className="radio-and-label-container"
              backgroundColor={() =>
                getCategoryBackgroundColor(theme, category)
              }
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

        <button type="submit">{selectedCard?.id?`Save`: `Add to Backlog`}</button>
      </Container>
    </Modal>
  );
};

export default TaskModal;
