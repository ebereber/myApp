import { GlobalStyles } from './styles/GlobalStyles'
import CartContextProvider from './Context/CartContext'
import AppRouter from './routes/AppRouter'
import { createContext, useState } from 'react'
import { darkTheme, lightTheme } from './styles/Theme'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default App
