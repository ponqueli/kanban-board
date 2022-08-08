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
  const { selectedTask } = useModal();

  const [title, setTitle] = useState(
    selectedTask?.title ? selectedTask?.title : ''
  );
  const [description, setDescription] = useState(
    selectedTask?.description ? selectedTask.description : ''
  );
  const [taskCategory, setTaskCategory] = useState(
    selectedTask?.category || CATEGORIES_ENUM.FEATURE
  );
  const [validationMessage, setValidationMessage] = useState('');

  const handleCloseModal = () => {
    toggleModalVisibility(undefined);
  };

  function resetForm() {
    setTitle('');
    setDescription('');
    setTaskCategory(CATEGORIES_ENUM.FEATURE);
    setValidationMessage('');
  }

  const handleCreateNewTask = (event) => {
    event.preventDefault();
    if (title.trim().length === 0) {
      setValidationMessage('Title is required');
      return;
    }

    setValidationMessage(undefined);

    if (!selectedTask?.id) {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        category: taskCategory,
        status: STATUS_ENUM.BACKLOG,
        hidden: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      dispatch(addTask(newTask));
      dispatch(updatedColumns(newTask.id));
      toggleModalVisibility(undefined);
      resetForm();
    }

    const updatedTask = {
      ...selectedTask,
      title,
      description,
      category: taskCategory,
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
    setTitle(selectedTask?.title ? selectedTask?.title : '');
    setDescription(selectedTask?.description ? selectedTask.description : '');
    setTaskCategory(selectedTask?.category || CATEGORIES_ENUM.FEATURE);
  }, [selectedTask, isOpen]);

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
        <h2>{selectedTask?.id?`You Are Editing 🐱`: "New Task"}</h2>
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
                  checked={taskCategory === category}
                  onChange={(e) => setTaskCategory(e.currentTarget.value)}
                />
                <span>{category}</span>
              </label>
            </RadioAndLabelContainer>
          ))}
        </CategoryContainer>

        <button type="submit">{selectedTask?.id?`Save`: `Add to Backlog`}</button>
      </Container>
    </Modal>
  );
};

export default TaskModal;
