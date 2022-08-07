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
  const { title, category, id } = task;
  const theme = useContext(ThemeContext);
  const [color, setColor] = useState(theme.colors.primary);
  const { toggleModalVisibility } = useModal();

  useEffect(() => {
    if (category) {
      const categoryColor = getCategoryBackgroundColor(theme, category);
      setColor(categoryColor);
    }
  }, [category]);

  return (
    <Draggable draggableId={id} index={index}>
     {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <header>
            <CardBorder color={color} />
            <Label>{title}</Label>
          </header>
          <CardBottom>
            <CategoryCard color={color}>
              <p>{category}</p>
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
