import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './hooks/useModal';
import KanbanBoard from './components/KanbanBoard';
import GlobalStyle from './styles/global';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <KanbanBoard toggleTheme={toggleTheme}/>
        <GlobalStyle />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
