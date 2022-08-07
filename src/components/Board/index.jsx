import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { DragDropContext } from 'react-beautiful-dnd';
import List from '../List';
import { Container } from './styles';

export default function Board() {
  const { columns } = useSelector((state) => state.columns);
  const { tasks } = useSelector((state) => state.tasks);

  const onDragEnd = (result) => {
    
   console.log(result);
  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column, index) => {
          const taskArray = [];
          column.tasksIds.forEach((taskId) => {
            const foundedTask = tasks.find((task) => task.id === taskId);
            if (foundedTask) taskArray.push(foundedTask);
          });
          return (
            <List
              index={index}
              key={column.id}
              status={column.id}
              title={column.title}
              creatable={column.creatable}
              tasks={taskArray}
            />
          );
        })}
      </DragDropContext>
    </Container>
  );
}
