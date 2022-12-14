import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useModal } from '../../hooks/useModal';
import { useDispatch } from 'react-redux';
import { deleteTask } from "../../store/tasks.slice";
import Board from '../Board';
import DecisionModal from '../DecisionModal';
import Header from '../Header';
import TaskModal from '../TaskModal';
import { Container } from './styles';
import { deleteTaskFromColumns } from '../../store/columns.slice';

export default function KanbanBoard({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { colors, title } = theme;
  const { 
    isOpen,
    isDecisionModalOpen,  
    toggleModalVisibility,
    taskToDelete,
    toggleDecisionModalVisibility,
   } = useModal();

  function handleDeleteTask() {
    dispatch(deleteTask(taskToDelete.id));
    dispatch(deleteTaskFromColumns(taskToDelete.id));
    toggleDecisionModalVisibility(false);
  }

  return (
    <>
      <Container>
        <Header
          title={title}
          colors={colors}
          toggleTheme={toggleTheme}
        >
        </Header>
        <Board />
      </Container>
      
      <TaskModal
        isOpen={isOpen}
        toggleModalVisibility={toggleModalVisibility}
        toast={toast}
      >
      </TaskModal>

      <DecisionModal
        isOpen={isDecisionModalOpen}
        onClose={toggleDecisionModalVisibility}
        titleHeader={`Are you sure you want to delete "${taskToDelete?.title}"?`}
        descriptionHeader="This action cannot be undone"
        onSubmit={handleDeleteTask} 
        toast={toast} 
      />
      <ToastContainer
        theme={title === 'light' ? 'light' : 'dark'}
      />
    </>
  );
}
