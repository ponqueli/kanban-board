import { useContext } from 'react';
import { ThemeContext } from "styled-components";
import { useModal } from '../../hooks/useModal';
import { MdAdd } from 'react-icons/md';
import { Container, ContainerHeader } from './styles';
import Card from '../Card';

export default function List() {
  const theme = useContext(ThemeContext); 
  const { toggleModalVisibility, selectedCard } = useModal();
  return (
    <Container>
      <ContainerHeader>
        <h2>Tarefas</h2>
        <button 
          type='button'
          onClick={() => toggleModalVisibility({})}
          >
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