import { useState } from 'react';
import { Provider } from 'react-redux';
import Modal from "react-modal";
import { ThemeProvider } from 'styled-components';

import { ModalProvider } from './hooks/useModal';
import store from './store';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <KanbanBoard toggleTheme={toggleTheme}/>
          <GlobalStyle />
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
