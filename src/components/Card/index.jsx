import { 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useModal } from '../../hooks/useModal';
import { getCategoryBackgroundColor } from '../../helpers/helpers';
import { ThemeContext } from 'styled-components';
import {
  Container,
  CardBorder,
  CardBottom,
  CategoryCard,
  Label,
} from './styles';

export default function Card({ task, index }) {
  const theme = useContext(ThemeContext);
  const [color, setColor] = useState(theme.colors.primary);
  const { toggleModalVisibility } = useModal();

  useEffect(() => {
    if (task) {
      const categoryColor = getCategoryBackgroundColor(theme, task.category);
      setColor(categoryColor);
    }
  }, [task]);

  return (
    <Draggable draggableId={task.id} index={index}>
     {(provided, snapshot) => (
        <Container
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
            <CategoryCard color={color}>
              <p>{task.category}</p>
            </CategoryCard>
            <p 
              className="onHover" 
              onClick={() => toggleModalVisibility(task)}
            >
              👉view more👈
            </p>
          </CardBottom>
        </Container>
     )}
    </Draggable>
  );
}
