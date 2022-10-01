import Switch from 'react-switch';
import { Avatar } from "@mui/material";
import MoonIcon from '../../assets/moon.png';
import SunIcon from '../../assets/sun.png';
import SearchInput from '../SearchInput';
import { MdLogout } from 'react-icons/md';
import { Container, SwitchIcon } from "./styles";

export default function Header({title, colors, toggleTheme, logOut, user}) {
    
  return (
    <Container color={colors.primary} >
      <Avatar className="avatar" src={`${user?.avatar}`}>
        {user?.email[0].toUpperCase() || 'U'}
      </Avatar>
      
      <h1><span>Gaia</span>FyBoard</h1>
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
      <SearchInput/>
      <MdLogout 
        style={{cursor: 'pointer', marginLeft: '1rem'}}
        size={30}
        color={colors.onPrimary}
        onClick={logOut}
      />
      
    </Container>
  )
}
