import { GoogleLogin } from 'react-google-login';
import { Container, Header, Content } from './styles';
import './style.css';

export default function Login({
  theme,
  handleLogin,
  handleOnFailure,
  clientId,
}) {
  const { colors } = theme;
  return (
    <Container bc={colors.loginBc}>
      <span className="cat">🐱</span>
      <Content>
        <Header>
          <h2>Welcome back!</h2>
          <p>Sign in to continue</p>
          <p>👇</p>
        </Header>
        <section>
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={handleLogin}
            onFailure={handleOnFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </section>
      </Content>
    </Container>
  );
}
