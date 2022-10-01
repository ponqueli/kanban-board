import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { gapi } from 'gapi-script';
import { client, q } from './services/fauna';
import store from './store';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from './hooks/useModal';
import Modal from "react-modal";
import Login from './components/Login';
import KanbanBoard from './components/KanbanBoard';
import { GlobalStyle } from "./styles/global";
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';

Modal.setAppElement('#root');

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [theme, setTheme] = useState(darkTheme);
  const [user, setUser] = useState(null);
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      }).then(() => {
        const auth = gapi.auth2.getAuthInstance();
        setIsSignedIn(auth.isSignedIn.get());
        auth.isSignedIn.listen(setIsSignedIn);
      })
    })
  }, [clientId]);

  const logOut = () => {
    gapi.auth2.getAuthInstance().signOut();
    setUser(null);
  }

  const handleLogin = async (googleData) => {
    const profile = googleData.getBasicProfile();

    setUser({
      name: profile?.getName(),
      email: profile?.getEmail(),
      avatar: profile?.getImageUrl()
    })

    try {
      const { data } = await client.query(
        q.Get(
          q.Match(
            q.Index('user_by_email'),
            q.Casefold(profile.getEmail())
          )
        )
      );

      if (data) {
        console.log('User already exists');
      }

    } catch (error) {
      if (error.requestResult.statusCode === 404) {
        console.log('User does not exist, creating user');

        const newUser = {
          data: {
            name: profile.getName(),
            email: profile.getEmail(),
          }
        }

        try {
          await client.query(
            q.Create(
              q.Collection('users'),
              newUser
            )
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log(error);
      }
    }
  }

  const handleOnFailure = (response) => {
    console.log(response);
  }

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? lightTheme : darkTheme);
  }

  return (
    (isSignedIn ?
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <KanbanBoard toggleTheme={toggleTheme} logOut={logOut} user={user}/>
            <GlobalStyle />
          </ModalProvider>
        </ThemeProvider>
      </Provider>
    :
      <Login
        theme={theme}
        handleLogin={handleLogin}
        handleOnFailure={handleOnFailure}
        clientId={clientId}
      /> 
  ));
}

export default App;
