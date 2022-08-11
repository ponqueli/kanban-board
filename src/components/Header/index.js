import Switch from 'react-switch';
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import { Container, SwitchIcon } from "./styles";

export default function Header({title, colors, toggleTheme}) {
  return (
    <Container color={colors.primary}>
      <h1>🐱GaiaFy<span>Board</span></h1>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={<SwitchIcon src={SunIcon} alt="Sun"/>} 
        uncheckedIcon={<SwitchIcon src={MoonIcon} alt="Moon"/>} 
        onColor={colors.onPrimary}
        offColor={colors.background}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      />
    </Container>
  )
}
