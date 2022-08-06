import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


import List from '../List';
import { Container } from './styles';

export default function Board() {
  const { columns } = useSelector(state => state.columns);
  const { tasks } = useSelector(state => state.tasks);

  return (
    <Container>
      {columns.map(column => {
        const taskArray = [];
        column.tasksIds.forEach(taskId => {
          const foundedTask = tasks.find(task => task.id === taskId);
          if (foundedTask) taskArray.push(foundedTask);
        });
        return(
          <List 
            key={column.id} 
            title={column.title}
            creatable={column.creatable}
            tasks={taskArray}
          />
        )
        
      
      })}
    </Container>
  );
}