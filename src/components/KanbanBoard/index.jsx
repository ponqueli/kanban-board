import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useModal } from '../../hooks/useModal';
import Board from '../Board';
import Header from '../Header';
import TaskModal from '../TaskModal';
import { Container } from './styles';

export default function KanbanBoard({ toggleTheme }) {
  const theme = useContext(ThemeContext);
  const { colors, title } = theme;
  const { isOpen, toggleModalVisibility } = useModal();

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
      >
      </TaskModal>
    </>
  );
}
