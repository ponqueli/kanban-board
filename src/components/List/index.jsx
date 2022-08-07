import { useContext } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import { useModal } from '../../hooks/useModal';
import { STATUS_ENUM } from '../../constants/enums';
import { MdAdd } from 'react-icons/md';
import { Container, ContainerHeader, TaskList } from './styles';
import Card from '../Card';

export default function List({ index, status, title, tasks, creatable }) {
  const { toggleModalVisibility } = useModal();
  return (
    <Container isDone={title === STATUS_ENUM.DONE}>
      <ContainerHeader>
        <h2>{title}</h2>
        {!creatable && (
          <button type="button" onClick={() => toggleModalVisibility({})}>
            <MdAdd size={24} color="#FFF" />
          </button>
        )}
      </ContainerHeader>
      <Droppable droppableId={status}>
        {(provided) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            >
            {tasks
              .filter(task => task.status === status)
              .map((task) => (<Card key={task.id} task={task} index={index} />))
            }
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
