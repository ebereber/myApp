import { useState, useContext } from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import Nav from './Nav/Nav'
import CartWidget from '../Cart/cartWidget/CartWidget'
import { ThemeContext } from '../../App'
import {
  CloseMenuIcon,
  HeaderSticky,
  Left,
  Logo,
  Menu,
  MenuIcon,
  MenuToggleButton,
  Right,
  SHeader,
  ThemeButton,
} from './styles'

function Header() {
  const { theme, setTheme } = useContext(ThemeContext)

  const [menuOpen, setMenuOpen] = useState(false)

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  const menuToggler = () => {
    setMenuOpen((prev) => !prev)
  }
  const menuTogglerHandler = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <>
      <HeaderSticky>
        <SHeader>
          <Left>
            <Logo to="/">Dash Iluminacion</Logo>
          </Left>
          <Right>
            <Nav menuToggler={menuToggler} />
          </Right>
          <CartWidget />
          <ThemeButton onClick={themeToggler}>
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </ThemeButton>
          <MenuToggleButton onClick={menuToggler}>
            {!menuOpen ? <MenuIcon /> : <CloseMenuIcon />}
          </MenuToggleButton>
        </SHeader>
      </HeaderSticky>
      <Menu style={menuOpen ? { left: 0 } : {}}>
        <Nav menuTogglerHandler={menuTogglerHandler} />
      </Menu>
    </>
  )
}

export default Header
