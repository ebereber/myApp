import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-family: muli, sans-serif;
  font-size: 16;
}

body {
background: ${({ theme }) => theme.bg};
 min-height: 100vh;
 position: relative;
}
`
