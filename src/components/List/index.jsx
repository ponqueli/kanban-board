import { Droppable } from 'react-beautiful-dnd';
import { Tooltip } from '@mantine/core';
import { useModal } from '../../hooks/useModal';
import { STATUS_ENUM } from '../../constants/enums';
import { MdAdd } from 'react-icons/md';
import { Container, ContainerHeader, TaskList } from './styles';
import Card from '../Card';

export default function List({ status, tasks, title, index, creatable }) {
  const { toggleModalVisibility } = useModal();

  const handleCreateNewTask = () => {
    toggleModalVisibility(undefined);
  }

  return (
    <Container isDone={title === STATUS_ENUM.DONE}>
      <ContainerHeader>
        <h2>{title}</h2>
        {!creatable && (
          <Tooltip
            label="Create New Task"
            withArrow
            arrowSize={6}
            position="left"
            transition="fade"
          >
            <button type="button" onClick={handleCreateNewTask}>
              <MdAdd size={24} color="#FFF" />
            </button>
          </Tooltip>
        )}
      </ContainerHeader>
      <Droppable droppableId={status}>
        {provided => (
          <TaskList
            ref={provided.innerRef} {...provided.droppableProps}>
            {tasks
              .filter(task => task.status === status)
              .map((task, index) => <Card key={task.id} task={task} index={index} />)
            }
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
}
