import { 
  useContext, 
  useEffect, 
  useState 
} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useModal } from '../../hooks/useModal';
import { getCategoryBackgroundColor } from '../../helpers/helpers';
import { ThemeContext } from 'styled-components';
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
          onClick={() => toggleModalVisibility(task)}
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

            <DeleteButton>
              <MdDelete 
                size={24} 
                className="onHover"
              />
            </DeleteButton>
          </CardBottom>
        </Container>
     )}
    </Draggable>
  );
}
