import { MdAdd } from 'react-icons/md';
import { Container, ContainerHeader } from './styles';
import Card from '../Card';

export default function List() {
  return (
    <Container>
      <ContainerHeader>
        <h2>Tarefas</h2>
        <button type='button'>
          <MdAdd size={24} color='#FFF' />
        </button>
      </ContainerHeader>
      <ul>
       <Card />
       <Card />
       <Card />
      </ul>
    </Container>
  );
}