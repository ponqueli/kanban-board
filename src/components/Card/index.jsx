import { 
  useContext, 
  useEffect, 
  useState 
} from 'react';
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
import "./style.css";

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
        className={!snapshot.isDragging ? 'shake-horizontal': ''}
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
          <CategoryCard color={color}>
            <p>{task.category}</p>
          </CategoryCard>

          <DeleteButton>
            <MdDelete
              onClick={handleDeleteTask} 
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
