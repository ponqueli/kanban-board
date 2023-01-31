import { 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { Tooltip } from '@mantine/core';
import { ThemeContext } from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { useModal } from '../../hooks/useModal';
import { getCategoryBackgroundColor } from '../../helpers/helpers';
import { MdDelete } from 'react-icons/md';
import {
  Container,
  CardBorder,
  CardBottom,
  CategoryCard,
  Label,
  DeleteButton,
} from './styles';

export default function Card({ task, index }) {
  const theme = useContext(ThemeContext);
  const [color, setColor] = useState(theme.colors.primary);
  const {toggleModalVisibility, toggleDecisionModalVisibility} = useModal();

  useEffect(() => {
    if (task) {
      const categoryColor = getCategoryBackgroundColor(theme, task.category);
      setColor(categoryColor);
    }
  }, [task,theme]);

  function handleDeleteTask(event) {
    event.stopPropagation();
    toggleDecisionModalVisibility(true, task);
  }
 
  return (
    <Draggable draggableId={task.id} index={index}>
    {(provided, snapshot) => (
      <Container
        onClick={() => toggleModalVisibility(task)}
        hideCard={task.hidden}
        ref={provided.innerRef} 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}
        isDragging= {snapshot.isDragging}
        color={color}
      >
        <header>
          <CardBorder color={color} />
          <Label>{task.title}</Label>
        </header>
        <CardBottom>
          <Tooltip 
            label={`Created at ${new Intl.DateTimeFormat('pt-BR').format(new Date(task?.createdAt))}`} 
            withArrow 
            arrowSize={6}
            position="right"
            transition="fade"
            >
            <CategoryCard color={color}>
              <p>{task.category}</p>
            </CategoryCard>
          </Tooltip>

          <Tooltip
            label={`Delete ${task.title}`}
            withArrow
            arrowSize={6}
            position="left"
            transition="fade"
          >
            <DeleteButton>
              <MdDelete
                onClick={handleDeleteTask} 
                size={24} 
                className="onHover"
              />
            </DeleteButton>
          </Tooltip>
        </CardBottom>
      </Container>
    )}
    </Draggable>
  );
}
