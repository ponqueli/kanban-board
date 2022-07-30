import List from '../List';
import { Container } from './styles';

export default function Board() {
  return (
    <Container>
      <List/>
      <List/>
      <List/>
    </Container>
  );
}