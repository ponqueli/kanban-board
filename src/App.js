import { useState } from 'react';
import Modal from "react-modal";
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './hooks/useModal';
import KanbanBoard from './components/KanbanBoard';
import { GlobalStyle } from "./styles/global";
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

Modal.setAppElement('#root');

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <KanbanBoard toggleTheme={toggleTheme}/>
      </ModalProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
