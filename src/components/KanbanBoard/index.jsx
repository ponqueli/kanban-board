import { useContext } from "react";
import { ThemeContext } from "styled-components";
import Board from "../Board";
import Header from "../Header";
import { Container } from "./styles";

export default function KanbanBoard({toggleTheme}) {

  const theme = useContext(ThemeContext);
  const { colors, title } = theme;
  const { primary } = colors;

  return (
    <Container>
      <Header 
        title={title}
        colors={colors}
        toggleTheme={toggleTheme}
        >
      </Header>
      <Board />
    </Container>
  )
}
