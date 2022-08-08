import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { setColumns } from "../../store/columns.slice";
import { setTasks } from "../../store/tasks.slice";
import List from '../List';
import { Container } from './styles';

export default function Board() {
  const dispatch = useDispatch();
  const { columns } = useSelector((state) => state.columns);
  const { tasks } = useSelector((state) => state.tasks);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index
    ) return;

    const updatedTasks = tasks.map(task => {
      if(task.id === draggableId){
        const status = destination.droppableId;
        return { ...task, status };
      }else{
        return task;
      }
    });

    const sourceColumn = columns.find(column => column.id === source.droppableId);
    const destinationColumn = columns.find(column => column.id === destination.droppableId);

    //Moving tasks in the same column
    if(sourceColumn === destinationColumn){
      const newColumnTasksIds = [...destinationColumn.tasksIds];

      newColumnTasksIds.splice(source.index, 1);
      newColumnTasksIds.splice(destination.index, 0, draggableId);
      
      const newDestinationColumn = {
        ...destinationColumn,
        tasksIds: newColumnTasksIds,
      }

      const updatedColumns = columns.map(column => {
        if(column.id === newDestinationColumn.id) return newDestinationColumn;
        return column;
      });

      dispatch(setColumns(updatedColumns));
      dispatch(setTasks(updatedTasks));

      return;
    }

    //Moving cards from one column to another
    const sourceTasksIds = [...sourceColumn.tasksIds];
    sourceTasksIds.splice(source.index, 1);

    const newSourceColumn = {
      ...sourceColumn,
      tasksIds: sourceTasksIds
    }

    const destinationtasksIds = [...destinationColumn.tasksIds];
    destinationtasksIds.splice(destination.index, 0, draggableId);

    const newDestinationColumn = {
      ...destinationColumn,
      tasksIds: destinationtasksIds
    }

    const updatedColumns = columns.map(column => {
      if (column.id === newDestinationColumn.id) return newDestinationColumn;
      if (column.id === newSourceColumn.id) return newSourceColumn;
      else return column;
    }) ;

    dispatch(setColumns(updatedColumns))
    dispatch(setTasks(updatedTasks))

  };

  return (
    <Container>
      <DragDropContext onDragEnd={onDragEnd}>
        {columns.map((column, index) => {

          const taskArray = [];
          
          column.tasksIds.forEach(taskId => {
            const foundedTask = tasks.find(task => task.id === taskId);
            if (foundedTask) taskArray.push(foundedTask);
          });
          
          return (
            <List
              key={column.id} 
              status={column.id} 
              tasks={taskArray}
              title={column.title}
              creatable={column.creatable}
            />
          )})}
      </DragDropContext>
    </Container>
  );
}
