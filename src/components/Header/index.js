import Switch from 'react-switch';
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import { Container, SwitchIcon } from "./styles";

export default function Header({title, colors, toggleTheme}) {
  return (
    <Container color={colors.primary}>
      <h1>Kanban <span>Board</span></h1>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={<SwitchIcon src={SunIcon} alt="Sun"/>} 
        uncheckedIcon={<SwitchIcon src={MoonIcon} alt="Moon"/>} 
        onColor={colors.onPrimary}
        offColor={colors.switch}
        activeBoxShadow={`0 0 10px ${colors.onPrimary}`}
      />
    </Container>
  )
}
