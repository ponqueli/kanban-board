import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  Container,
  CardBorder,
  CardBottom,
  CategoryCard,
  Label,
} from './styles';

export default function Card({ title, category }) {
  const theme = useContext(ThemeContext);
  const [color, setColor] = useState(theme.colors.primary);

  return (
    <Container>
      <header>
        <CardBorder color={color} />
        <Label>{title}</Label>
      </header>
      <CardBottom>
        <CategoryCard color={color}>
          <p>{category}</p>
        </CategoryCard>
        <p>view more</p>
      </CardBottom>
    </Container>
  );
}
